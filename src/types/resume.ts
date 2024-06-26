export type SectionItem = TextSectionType | ShortSectionType | LongSectionType;

export interface Resume {
  id: number;
  createdAt: Date;
  modifiedAt: Date;

  fileName: string;
  mainColor: string;

  userInfo: ResumeUserInfo;
  sectionList: SectionItem[];
}

export interface ResumeUserInfo {
  name: string;
  position: string;
  contact: Contact[];
  address: string;
  quote: string;
}

export type ContactType =
  | "phone"
  | "email"
  | "homepage"
  | "GitHub"
  | "GitLab"
  | "Stack Overflow"
  | "LinkedIn"
  | "X"
  | "Reddit";

export interface Contact {
  id: number | (() => number);
  type: ContactType;
  content: string;
}

export interface SectionType {
  id: string | (() => string);
  title: string;
  type: "text" | "short" | "long";
}
export interface TextSectionType extends SectionType {
  type: "text";
  content: string;
}

export interface ShortSectionItemType {
  date: string;
  position: string;
  content: string;
  location: string;
}

export interface ShortSectionType extends SectionType {
  type: "short";
  itemList: ShortSectionItemType[];
}

export interface DateItem {
  start: string;
  end?: string;
  useEnd: boolean;
  useCurrent: boolean;
  useDuration: boolean;
}

export interface LongSectionItemType {
  title: string;
  date: DateItem;
  position: string;
  content: markdownString;
  location: string;
}

export interface LongSectionType extends SectionType {
  type: "long";
  itemList: LongSectionItemType[];
}

type markdownString = string;
