import react from "react";
import { useDrag, useDrop } from "react-dnd";

export default function DraggableItem({
  children,
  onDrag,
  id,
  index,
}: {
  children: React.ReactNode;
  onDrag: (dragIndex: number, hoverIndex: number) => void;
  id: any;
  index: number;
}) {
  const ref = react.useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "contact",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset() || { y: 0 };
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      onDrag(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "contact",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: id === monitor.getItem()?.id,
    }),
  });

  drag(drop(ref));

  return (
    <div data-handler-id={handlerId} ref={ref}>
      {children}
    </div>
  );
}
