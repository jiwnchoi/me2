interface ContentTypes {
  'contents/bio': ContentsBio;
}

interface ContentsBio {
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

export type ContentTypesType = ContentTypes;