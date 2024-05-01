import {
  LongSectionItemType,
  ShortSectionItemType,
  TextSectionType,
} from "@/types/resume";

export const TEXT_SECTION_TEMPLATE: TextSectionType = {
  id: new Date().getTime().toString(),
  title: "새로운 섹션",
  type: "text",
  content: "",
};

export const SHORT_SECTION_ITEM_LIST_TEMPLATE: ShortSectionItemType = {
  date: "",
  position: "",
  content: "",
  location: "",
};

export const LONG_SECTION_ITEM_LIST_TEMPLATE: LongSectionItemType = {
  title: "",
  date: {
    start: "",
    end: "",
    useEnd: false,
    useCurrent: false,
    useDuration: false,
  },
  position: "",
  content: "",
};
