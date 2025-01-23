interface ContentTypes {
  'contents/profile': ContentsProfile;
  'contents/sections/exp': ContentsSectionsExp;
  'contents/sections/news': ContentsSectionsNews;
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

export type ContentTypesType = ContentTypes;