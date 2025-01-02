/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs").promises;
const path = require("path");

/**
 * 주어진 디렉토리에서 모든 JSON 파일을 재귀적으로 찾아 객체 형태로 반환합니다.
 * @param {string} dirPath 탐색할 디렉토리 경로
 * @param {string} aliasPrefix tsconfig.json의 paths에서 설정한 alias 접두사 (예: "@/")
 * @param {string} baseDir 프로젝트의 루트 디렉토리 경로
 * @returns {Promise<object>} JSON 파일 데이터가 담긴 객체
 */
async function collectJSONFiles(dirPath, aliasPrefix, baseDir) {
  let jsonFiles = {};

  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      const subDirFiles = await collectJSONFiles(fullPath, aliasPrefix, baseDir);
      for (const key in subDirFiles) {
        if (jsonFiles[key]) {
          jsonFiles[key].push(...subDirFiles[key]);
        } else {
          jsonFiles[key] = subDirFiles[key];
        }
      }
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      try {
        const content = await fs.readFile(fullPath, "utf-8");
        const jsonData = JSON.parse(content);

        const parentDirPath = path.dirname(fullPath);
        const relativePath = path
          .relative(path.resolve(baseDir), parentDirPath)
          .replace(/\\/g, "/");
        let key = relativePath;
        if (aliasPrefix) {
          key = aliasPrefix + relativePath;
        }

        if (jsonFiles[key]) {
          jsonFiles[key].push(jsonData);
        } else {
          jsonFiles[key] = [jsonData];
        }
      } catch (error) {
        console.error(`Failed to read or parse JSON file: ${fullPath}`, error);
      }
    }
  }
  return jsonFiles;
}

/**
 * 폴더 이름을 TypeScript 인터페이스 이름으로 사용하기 적절하게 변환합니다.
 * 공백을 제거하고, 특수 문자를 제거합니다.
 * @param {string} folderName 변환할 폴더 이름
 * @returns {string} 변환된 폴더 이름
 */
function convertFolderName(folderName) {
  // 공백을 제거하고, 특수문자를 제거하고, 첫 글자를 대문자로 만든다
  return folderName
    .replace(/[^a-zA-Z0-9\s/]/g, "") // 특수문자 제거
    .split("/")
    .map((part) =>
      part
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""),
    )
    .join("");
}

/**
 * JSON 데이터로부터 TypeScript 타입 정의 문자열을 생성합니다.
 *
 * @param {object} data JSON 데이터
 * @param {string} interfaceName 생성할 인터페이스 이름
 * @returns {string} TypeScript 타입 정의 문자열
 */
function generateTypeDefinitions(data, interfaceName) {
  let definitions = `interface ${interfaceName} {\n`;
  let nestedTypes = "";

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const interfaceKey = convertFolderName(key);
      const typeInfo = getTypeFromValue(value, interfaceKey);
      definitions += `  '${key}': ${typeInfo.type};\n`;
      if (typeInfo.nestedType) {
        nestedTypes += typeInfo.nestedType;
      }
    }
  }

  definitions += "}\n\n";
  definitions += nestedTypes;
  definitions += `export type ${interfaceName}Type = ${interfaceName};`;
  return definitions;
}

/**
 * 값의 타입에 따라 TypeScript 타입 문자열을 반환합니다.
 *
 * @param {*} value 값
 * @returns {string} TypeScript 타입 문자열
 */
function getTypeFromValue(value, key) {
  if (value === null) return { type: "null" };
  if (typeof value === "number") return { type: "number" };
  if (typeof value === "boolean") return { type: "boolean" };
  if (typeof value === "string") return { type: "string" };
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return { type: "any[]" };
    }
    const itemTypes = [...new Set(value.map((item) => getTypeFromValue(item).type))];
    if (itemTypes.length === 1) {
      return { type: `${itemTypes[0]}[]` };
    } else {
      return { type: `(${itemTypes.join(" | ")})[]` };
    }
  }
  if (typeof value === "object") {
    const nestedInterfaceName = `${key.charAt(0).toUpperCase() + key.slice(1)}`;
    const { interfaceString, nestedTypes } = generateTypeDefinitionString(
      value,
      nestedInterfaceName,
    );
    return { type: nestedInterfaceName, nestedType: `${interfaceString}${nestedTypes}` };
  }
  return { type: "any" };
}

function generateTypeDefinitionString(data, interfaceName) {
  let interfaceString = `interface ${interfaceName} {\n`;
  let nestedTypes = "";

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const typeInfo = getTypeFromValue(value, key);
      interfaceString += `  '${key}': ${typeInfo.type};\n`;
      if (typeInfo.nestedType) {
        nestedTypes += typeInfo.nestedType;
      }
    }
  }
  interfaceString += "}\n\n";

  return { interfaceString, nestedTypes };
}

/**
 * 타입 정의 문자열을 파일에 씁니다.
 *
 * @param {string} filePath 저장할 파일 경로
 * @param {string} typeDefinitions 타입 정의 문자열
 */
async function writeTypeDefinitionsToFile(filePath, typeDefinitions) {
  try {
    await fs.writeFile(filePath, typeDefinitions, "utf-8");
  } catch (error) {
    throw new Error(`Failed to write type definitions to file: ${error.message}`);
  }
}

async function generateContentTypes(contentDir, outputFilePath, aliasPrefix, baseDir) {
  try {
    const jsonSchemas = await collectJSONFiles(contentDir, aliasPrefix, baseDir);
    const mergedSchemas = {};
    for (const key in jsonSchemas) {
      if (jsonSchemas.hasOwnProperty(key)) {
        mergedSchemas[key] = mergeSchema(jsonSchemas[key]);
      }
    }

    const typeDefinitions = generateTypeDefinitions(mergedSchemas, "ContentTypes");
    await writeTypeDefinitionsToFile(outputFilePath, typeDefinitions);
    console.log(`Successfully generated ${outputFilePath}`);
  } catch (error) {
    console.error("Error generating types:", error);
  }
}

function mergeSchema(schemas) {
  if (!schemas || schemas.length === 0) return {};
  if (schemas.length === 1) return schemas[0];

  const merged = {};
  for (const schema of schemas) {
    for (const key in schema) {
      if (schema.hasOwnProperty(key)) {
        if (!merged[key]) {
          merged[key] = schema[key];
        } else {
          if (typeof merged[key] === "object" && typeof schema[key] === "object") {
            if (Array.isArray(merged[key]) && Array.isArray(schema[key])) {
              const mergedSet = new Set([...merged[key], ...schema[key]]);
              merged[key] = Array.from(mergedSet);
            } else {
              merged[key] = { ...merged[key], ...schema[key] };
            }
          } else if (merged[key] !== schema[key]) {
            merged[key] = [merged[key], schema[key]]; //union 처리
          }
        }
      }
    }
  }
  return merged;
}

async function main() {
  const baseDir = path.resolve("."); // 프로젝트 루트 디렉토리
  const tsconfigPath = path.join(baseDir, "tsconfig.json");
  let aliasPrefix = null;

  try {
    const tsconfigContent = await fs.readFile(tsconfigPath, "utf-8");
    const tsconfig = JSON.parse(tsconfigContent);

    if (tsconfig.compilerOptions && tsconfig.compilerOptions.paths) {
      const paths = tsconfig.compilerOptions.paths;
      for (const key in paths) {
        if (key.endsWith("/*")) {
          aliasPrefix = key.slice(0, -2);
          break;
        }
      }
    }
  } catch (error) {
    console.log(
      "tsconfig.json을 찾을 수 없거나, paths 설정을 읽을 수 없습니다. alias 없이 진행합니다.",
      error,
    );
  }

  await generateContentTypes("./contents", "./contents/index.d.ts", aliasPrefix, baseDir);
  await generateContentTypes("./locales", "./locales/index.d.ts", aliasPrefix, baseDir);
}

main();
