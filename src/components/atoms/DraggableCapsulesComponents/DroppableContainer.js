import React, { useState, useRef, Children } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../Constants";
import DraggableCapsule from "../../molecules/DraggableCapsule";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const DroppableContainer = (props) => {


    const [{ isOver }, drop] = useDrop({
      accept: ItemTypes.HEADER,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }), 
    })
        
  return (
    <div>
      {isOver && (
        <div ref={drop} className="flex justify-center items-center rounded-full border-dotted border-2 bg-amber-50 border-amber-300 w-full h-15 p-2">
            {props.children}
        </div>)
      }
      {!isOver && (
        <div ref={drop} className="flex justify-center items-center rounded-full border-dotted border-2 border-violet-300 w-full h-15 p-2">
            {props.children}
        </div>
      )}
    </div>
    )
}


export default DroppableContainer; 
