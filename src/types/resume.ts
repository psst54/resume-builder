export interface ContactItem {
  id: (() => number) | number;
  type: string;
  text: string;
}

//----------------------------------------

export type SectionType = "text" | "long" | "short";
export type DescItemType = "tag" | "list" | "link";

export interface DescItem {
  [key: string]: DescItemType | string | string[];
  type: DescItemType;
  items: string[];
  title: string;
  url: string;
}

//----------------------------------------

export interface TextSectionContent {
  [key: string]: string;
  text: string;
}

export interface LongSectionContent {
  [key: string]: string | boolean | DescItem[];
  title: string;
  position: string;
  location: string;
  start: string;
  useEndDate: boolean;
  descItems: DescItem[];
}

export interface ShortSectionContent {
  [key: string]: string | boolean;
  year: string;
  position: string;
  subscription: boolean;
  location: string;
}

export interface SectionItem {
  title: string;
  type: "text" | "long" | "short";
  content: (TextSectionContent | LongSectionContent | ShortSectionContent)[];
}

//----------------------------------------

export interface ResumeContent {
  header: {
    [key: string]: string | ContactItem[];
    title: string;
    name: string;
    position: string;
    quote: string;
    contactItems: ContactItem[];
  };
  body: SectionItem[];
}

export interface Resume {
  id: number;
  created_at: Date;
  modified_at: Date;
  content: ResumeContent;
  main_color: string;
  title: string;
  uid: string;
}
