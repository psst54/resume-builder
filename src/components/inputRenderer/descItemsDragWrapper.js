import styled from "@emotion/styled";
import { color } from "@/styles/color";

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
  data,
  setData,
  contentItem,
  idxObj,
  onChangeDescItemType,
  onAddDescItem,
  onDeleteDescItem,
  onChangeDescItem,
  onChangeDescLink,
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {contentItem?.descItems?.map((descItem, descItemIdx) => {
        return (
          <InputContainer>
            <Selector
              idxObj={{ ...idxObj, descItemIdx }}
              selected={descItem.type}
              options={itemTypeData}
              data={data}
              setData={setData}
              onChange={onChangeDescItemType}
              isTitle={true}
            />
            <DescItems
              data={data}
              setData={setData}
              descItem={descItem}
              idxObj={{ ...idxObj, descItemIdx }}
              onAddDescItem={onAddDescItem}
              onDeleteDescItem={onDeleteDescItem}
              onChangeDescItem={onChangeDescItem}
              onChangeDescLink={onChangeDescLink}
            />
          </InputContainer>
        );
      })}
    </DndProvider>
  );
};

export default DescItemsDragWrapper;
