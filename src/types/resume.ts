interface Resume {
  id: number;
  createdAt: Date;
  modifiedAt: Date;

  fileName: string;
  mainColor: string;

  userInfo: ResumeUserInfo;
  sectionList: (TextSection | ShortSection | LongSection)[];
}

interface ResumeUserInfo {
  name: string;
  position: string;
  contact: Contact[];
  address: string;
  quote: string;
}

type ContactType =
  | "phone"
  | "email"
  | "homepage"
  | "GitHub"
  | "GitLab"
  | "Stack Overflow"
  | "LinkedIn"
  | "X"
  | "Reddit";

interface Contact {
  id: number | (() => number);
  type: ContactType;
  content: string;
}

interface Section {
  id: string | (() => string);
  title: string;
  type: "text" | "short" | "long";
}
interface TextSection extends Section {
  type: "text";
  content: string;
}

interface ShortSectionItem {
  position: string;
  content: string;
  location: string;
}
interface ShortSection extends Section {
  type: "short";
  itemList: ShortSectionItem[];
}

interface LongSectionItem {
  title: string;
  date: {
    start: string;
    end?: string;
    useEnd: boolean;
    useCurrent: boolean;
    useDuration: boolean;
  };
  position: string;
  content: markdownString;
}

interface LongSection extends Section {
  type: "long";
  itemList: LongSectionItem[];
}

type markdownString = string;
