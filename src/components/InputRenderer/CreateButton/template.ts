import {
  LongSectionItemType,
  LongSectionType,
  ShortSectionItemType,
  ShortSectionType,
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

export const SHORT_SECTION_TEMPLATE: ShortSectionType = {
  id: new Date().getTime().toString(),
  title: "새로운 섹션",
  type: "short",
  itemList: [SHORT_SECTION_ITEM_LIST_TEMPLATE],
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
  location: "",
};

export const LONG_SECTION_TEMPLATE: LongSectionType = {
  id: new Date().getTime().toString(),
  title: "새로운 섹션",
  type: "long",
  itemList: [LONG_SECTION_ITEM_LIST_TEMPLATE],
};
