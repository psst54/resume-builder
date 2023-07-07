import styled from "@emotion/styled";
import { color } from "@/app/styles";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DescItems from "./descItems";
import { InputContainer } from "./styles";
import Selector from "../customSelector";

const itemTypeData = [
  {
    title: "리스트",
    value: "list",
  },
  {
    title: "태그",
    value: "tag",
  },
  {
    title: "링크",
    value: "link",
  },
];

const DescItemsDragWrapper = ({
  contentItem,
  idxObj,
  setDescItemType,
  addDescItem,
  deleteDescItem,
  editDescItem,
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {contentItem?.descItems?.map((descItem, descItemIdx) => {
        return (
          <InputContainer>
            <Selector
              idxObj={{ ...idxObj, descItemIdx }}
              selected={descItem.type}
              data={itemTypeData}
              setData={setDescItemType}
              isTitle={true}
            />
            <DescItems
              descItem={descItem}
              idxObj={{ ...idxObj, descItemIdx }}
              addDescItem={addDescItem}
              deleteDescItem={deleteDescItem}
              editDescItem={editDescItem}
            />
          </InputContainer>
        );
      })}
    </DndProvider>
  );
};

export default DescItemsDragWrapper;
