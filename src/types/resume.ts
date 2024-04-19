interface Resume {
  id: number;
  created_at: Date;
  modified_at: Date;
  main_color: string;
  title: string;
  basic: ResumeBasicInfo;
  content: (TextSection | LongSection)[];
}

interface ResumeBasicInfo {
  name: string;
  position: string;
  contact: Contact[];
  address: string;
  quote: string;
}

interface Contact {
  id: number | (() => number);
  type:
    | "phone"
    | "email"
    | "homepage"
    | "GitHub"
    | "GitLab"
    | "Stack Overflow"
    | "LinkedIn"
    | "X"
    | "Reddit";
  content: string;
}

interface Section {
  id: string | (() => string);
  title: string;
}
interface TextSection extends Section {
  content: string;
}

interface ShortSection extends Section {}

interface LongSection extends Section {
  date: {
    start: Date;
    end: Date;
    useEnd: boolean;
    useCurrent: boolean;
  };
  position: string;
}
