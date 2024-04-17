import react from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DraggableInput from "./draggableInput";

const contactTypeData = [
  {
    title: "전화번호",
    value: "phone",
    placeholder: "(+82) 10-XXXX-XXXX",
  },
  {
    title: "메일",
    value: "email",
    placeholder: "example@domain.com",
  },
  {
    title: "홈페이지",
    value: "homepage",
    placeholder: "psst54.me",
  },
  {
    title: "Github",
    value: "github",
    placeholder: "Github handle",
  },
  {
    title: "Gitlab",
    value: "gitlab",
    placeholder: "Gitlab handle",
  },
  {
    title: "Stack Overflow",
    value: "stackoverflow",
    placeholder: "Stack Overflow handle",
  },
  {
    title: "LinkedIn",
    value: "linkedin",
    placeholder: "LinkedIn handle",
  },
  {
    title: "Twitter",
    value: "twitter",
    placeholder: "Twitter handle",
  },
  {
    title: "Reddit",
    value: "reddit",
    placeholder: "Reddit handle",
  },
];

const ContactItems = ({ data, setData, mainColor }) => {
  const setContactType = ({ idxObj, selectedValue }) => {
    setData({
      ...data,
      header: {
        ...data.header,
        contactItems: data.header.contactItems.map(
          (oldContactItem, oldContactItemIdx) => {
            return oldContactItemIdx === idxObj.contactItemIdx
              ? { ...oldContactItem, type: selectedValue }
              : oldContactItem;
          }
        ),
      },
    });
  };

  const updateContactItem = ({ idx, value }) => {
    setData({
      ...data,
      header: {
        ...data.header,
        contactItems: data.header.contactItems.map(
          (oldContactItem, oldContactItemIdx) => {
            return oldContactItemIdx === idx
              ? { ...oldContactItem, text: value }
              : oldContactItem;
          }
        ),
      },
    });
  };

  const deleteContactItem = ({ idx }) => {
    setData({
      ...data,
      header: {
        ...data.header,
        contactItems: data.header.contactItems.filter(
          (_, oldContactItemIdx) => oldContactItemIdx !== idx
        ),
      },
    });
  };

  const moveCard = react.useCallback((dragIndex, hoverIndex) => {
    setData((prevData) => {
      const oldList = [...prevData.header.contactItems];

      oldList.splice(dragIndex, 1);
      oldList.splice(hoverIndex, 0, prevData.header.contactItems[dragIndex]);

      return {
        ...prevData,
        header: {
          ...prevData.header,
          contactItems: oldList,
        },
      };
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        {data?.header?.contactItems?.map((contactItem, contactItemIdx) => {
          const contactTypeDatum = contactTypeData.filter(
            (contactTypeDatum) => contactTypeDatum.value === contactItem.type
          )[0];
          const value = contactTypeDatum.value;
          const placeholder = contactTypeDatum.placeholder;

          return (
            <DraggableInput
              key={contactItemIdx}
              data={data}
              setData={setData}
              type="select"
              value={contactItem.text}
              placeholder={placeholder}
              setValue={(event) => {
                updateContactItem({
                  idx: contactItemIdx,
                  value: event.target.value,
                });
              }}
              selectorData={{
                idxObj: { contactItemIdx },
                selected: value,
                data: contactTypeData,
                setFunc: setContactType,
              }}
              onDelete={deleteContactItem}
              canDrag={true}
              id={contactItem?.id}
              index={contactItemIdx}
              moveCard={moveCard}
              mainColor={mainColor}
            />
          );
        })}
      </div>
    </DndProvider>
  );
};

export default ContactItems;
