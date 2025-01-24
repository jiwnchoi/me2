interface ContentTypes {
  'contents/profile': ContentsProfile;
  'contents/sections/edu': ContentsSectionsEdu;
  'contents/sections/exp': ContentsSectionsExp;
  'contents/sections/hnr': ContentsSectionsHnr;
  'contents/sections/news': ContentsSectionsNews;
  'contents/sections/pub': ContentsSectionsPub;
}

interface ContentsProfile {
  'name': string[];
  'description': string[];
  'email': string;
  'scholar': string;
  'github': string;
  'linkedin': string;
  'twitter': string;
  'instagram': string;
  'hello': number;
}

interface ContentsSectionsEdu {
  '0': 0;
  '1': 1;
  '2': 2;
}

interface 0 {
  'title': string;
  'role': string;
  'location': string;
  'date': string;
  'description': string;
  'url': string;
  'image': string;
}

interface 1 {
  'title': string;
  'role': string;
  'location': string;
  'date': string;
  'description': string;
  'url': string;
  'image': string;
}

interface 2 {
  'title': string;
  'role': string;
  'location': string;
  'date': string;
  'url': string;
  'image': string;
}

interface ContentsSectionsExp {
  '0': 0;
  '1': 1;
  '2': 2;
  '3': 3;
  '4': 4;
}

interface 0 {
  'title': string;
  'role': string;
  'location': string;
  'date': string;
  'description': string;
  'url': string;
  'image': string;
}

interface 1 {
  'title': string;
  'role': string;
  'location': string;
  'date': string;
  'description': string;
  'url': string;
  'image': string;
}

interface 2 {
  'title': string;
  'role': string;
  'location': string;
  'date': string;
  'description': string;
  'url': string;
  'image': string;
}

interface 3 {
  'title': string;
  'role': string;
  'location': string;
  'date': string;
  'description': string;
  'url': string;
  'image': string;
}

interface 4 {
  'title': string;
  'role': string;
  'location': string;
  'date': string;
  'description': string;
  'url': string;
  'image': string;
}

interface ContentsSectionsHnr {
  '0': 0;
  '1': 1;
  '2': 2;
  '3': 3;
  '4': 4;
  '5': 5;
  '6': 6;
  '7': 7;
  '8': 8;
  '9': 9;
  '10': 10;
  '11': 11;
  '12': 12;
  '13': 13;
  '14': 14;
  '15': 15;
}

interface 0 {
  'title': string;
  'location': string;
  'date': string;
  'url': string;
  'description': string;
}

interface 1 {
  'title': string;
  'date': string;
  'url': string;
  'description': string;
}

interface 2 {
  'title': string;
  'date': string;
  'url': string;
  'description': string;
}

interface 3 {
  'title': string;
  'date': string;
  'url': string;
  'description': string;
}

interface 4 {
  'title': string;
  'date': string;
  'url': string;
  'description': string;
}

interface 5 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 6 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 7 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 8 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 9 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 10 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 11 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 12 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 13 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface 14 {
  'title': string;
  'date': string;
  'location': string;
  'url': string;
  'description': string;
}

interface 15 {
  'title': string;
  'date': string;
  'location': string;
  'description': string;
  'url': string;
}

interface ContentsSectionsNews {
  '0': 0;
  '1': 1;
  '2': 2;
  '3': 3;
  '4': 4;
  '5': 5;
}

interface 0 {
  'date': string;
  'description': string;
}

interface 1 {
  'date': string;
  'description': string;
}

interface 2 {
  'date': string;
  'description': string;
}

interface 3 {
  'date': string;
  'description': string;
}

interface 4 {
  'date': string;
  'description': string;
}

interface 5 {
  'date': string;
  'description': string;
}

interface ContentsSectionsPub {
  '0': 0;
  '1': 1;
  '2': 2;
  '3': 3;
  '4': 4;
  '5': 5;
  '6': 6;
}

interface 0 {
  'name': string;
  'url': string;
  'abbr': string;
  'title': string;
  'authorNames': string[];
  'venue': string[];
  'githubLink': string;
  'videoDemoLink': string;
  'webDemoLink': string;
}

interface 1 {
  'name': string;
  'url': string;
  'abbr': string;
  'title': string;
  'authorNames': string[];
  'venue': string[];
  'githubLink': string;
}

interface 2 {
  'name': string;
  'url': string;
  'abbr': string;
  'title': string;
  'authorNames': string[];
  'venue': string[];
  'githubLink': string;
  'videoDemoLink': string;
  'pdfLink': string;
  'webDemoLink': string;
}

interface 3 {
  'name': string;
  'url': string;
  'abbr': string;
  'title': string;
  'authorNames': string[];
  'venue': string[];
  'githubLink': string;
  'videoDemoLink': string;
  'webDemoLink': string;
  'pdfLink': string;
}

interface 4 {
  'name': string;
  'url': string;
  'abbr': string;
  'title': string;
  'authorNames': string[];
  'venue': string[];
  'githubLink': string;
  'videoDemoLink': string;
}

interface 5 {
  'name': string;
  'url': string;
  'abbr': string;
  'title': string;
  'authorNames': string[];
  'venue': string[];
  'pdfLink': string;
  'githubLink': string;
  'videoDemoLink': string;
  'talkLink': string;
}

interface 6 {
  'abbr': string;
  'title': string;
  'authorNames': string[];
  'venue': string[];
  'pdfLink': string;
  'githubLink': string;
  'webDemoLink': string;
  'videoDemoLink': string;
  'talkLink': string;
}

export type ContentTypesType = ContentTypes;