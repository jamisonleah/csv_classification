import React, { useState, useRef } from "react";
import DraggableCapsuleText from "../atoms/DraggableCapsulesComponents/DraggableCapsuleText";
import DropdownMenu from "../atoms/DraggableCapsulesComponents/DropdownMenu";
import { ItemTypes } from "../atoms/Constants";
import { useDrag, useDrop } from 'react-dnd'
import MenuImage from "../atoms/DraggableCapsulesComponents/MenuImage";

function DraggableCapsule({ item: header, index, moveHeader, moveBack, renderType }) {


  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.HEADER,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    drop(item, monitor) {
      if (!ref.current) {
        return; 
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return; 
      }
     
      // Time to actually perform the action

      moveHeader(dragIndex, hoverIndex); 
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex; 

    },
  })


  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.HEADER,
    item: () => {
      return { index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })


  const hide = () => {
      moveBack(index);
  }

  const changeType = (type) => {
    renderType(index, type);
  }
  
  drag(drop(ref))



  return (
    <div ref={ref}  className= "flex justify-center shadow-md bg-violet-300 rounded-full shadow-violet-300 "style={{ opacity: !header.hidden ? 1 : 0.3}} data-handler-id={handlerId}>  
      <MenuImage type={header.type}/>
      <DraggableCapsuleText item={header.name} type={header.type} />
      <DropdownMenu item={header} hide={hide} changeType={changeType}/>
    </div>
  )

}
export default DraggableCapsule;