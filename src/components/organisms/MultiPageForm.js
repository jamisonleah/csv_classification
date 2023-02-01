import React, { useState, useRef, useCallback } from 'react';
import update from 'immutability-helper'
import VioletButton from '../atoms/Buttons/VioletButton';
import InputCSVForm from '../forms/InputCSVForm';
import DraggableCapsule from '../molecules/DraggableCapsule';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DroppableContainer from '../atoms/DraggableCapsulesComponents/DroppableContainer';

function MultiPageForm() {

  const [currentPage, setCurrentPage] = useState(1);
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);


  function handleNext() {
    setCurrentPage(currentPage + 1);
  }

  function handlePrev() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div>
      {currentPage === 1 && <Page1 handleNext={handleNext} setCsvData={setCsvData} setHeaders={setHeaders} />}
      {currentPage === 2 && <Page2 handlePrev={handlePrev} handleNext={handleNext} temps={headers} />}
      {currentPage === 3 && <Page3 handlePrev={handlePrev} />}
    </div>
  );
}
export default MultiPageForm;

function Page1({ handleNext, setCsvData, setHeaders }) {
  return (
    <div>
      <InputCSVForm setCsvData={setCsvData} setHeaders={setHeaders} />
      <VioletButton text="Next" eventHandler={handleNext} />
    </div>
  );
}



//preparing headers of data
function Page2({ handlePrev, handleNext, temps }) {
  // dragItem is used to store the item being dragged
  // useRef is used to store the reference of the item being dragged
  const dragItem = useRef();

  // headers is the array of headers
  // setHeaders is the function to update the array of headers
  const [headers, setHeaders] = useState(() => {
    let tempheaders = [];
    for (let i = 0; i < temps.length; i++) {
      tempheaders.push(
        {
          index: i,
          name: temps[i],
          type: 'string',
          hidden: false,
          length: temps.length
        }
      )
    }
    return tempheaders;
  });


  // swapHeaders is used to swap the headers in the array
  // update is used to update the array
  // $splice is used to splice the array
  // [dragIndex, 1] is used to remove the element at the dragIndex
  // [hoverIndex, 0, prevCards[dragIndex]] is used to insert the element at the hoverIndex
  // prevCards[dragIndex] is used to insert the element at the dragIndex
  // prevCards is the previous array
  const swapHeaders = useCallback((dragIndex, hoverIndex) => {
    setHeaders((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])

  // useCallBack is for memoization of the function so that it is not re-rendered every time the component is re-rendered 
  // moveBack is used to move the header to the end of the array
  // filter is used to filter the array and remove the element at the index 
  // push is used to push the element at the end of the array
  const moveBack = useCallback((index) => {
    setHeaders((prevCards) => {
      const elementToMove = prevCards[index];
      elementToMove.hidden = prevCards[index].hidden ? false : true;
      const newArray = prevCards.filter((element, i) => i !== index);
      newArray.push(elementToMove);
      return newArray;
    });
  }, []);

  const renderType = useCallback((index, type) => {
    setHeaders((cards) => {
      const newArray = cards.map((card, i) => {
        if (i === index) {
          card.type = type;
        }
        return card;
      });
      return newArray;
    });
  }, []);


  /**
   *  I wanted the capsules to be inside the droppable container so that the user can drop the capsule anywhere inside the container
   * 
   * renderHeaders is used to render the headers
   * DroppableContainer is used to make the header droppable
   * DraggableHeader is used to make the header draggable
   * item is the header with it's properties [ index, name, type, hidden, length ]
   */


  const renderHeaders = useCallback((header, index) => {

      return (
        < DroppableContainer key={index} >
          <DraggableCapsule item={header} renderType={renderType} moveBack={moveBack} index={index} key={index} moveHeader={swapHeaders} />
        </DroppableContainer >
      )

    }, []);

    return (
      <div class="p-5 w-10/12 mx-auto">
        <DndProvider backend={HTML5Backend}>
          <div class="flex flex-wrap">
            {headers.map((item, index) => renderHeaders(item, index))}
          </div>
        </DndProvider>

        <br />

        <div class="grid grid-cols-2 gap-5">
          <VioletButton text="Previous" eventHandler={handlePrev} />
          <VioletButton text="Next" eventHandler={handleNext} />
        </div>
      </div>
    );
  }
 

function Page3({ handlePrev }) {
      return (
        <div>
          <h1>Page 3</h1>
          <form>
            {/* form inputs */}
          </form>
          <VioletButton text="Previous" eventHandler={handlePrev} />
        </div>
      );
    }


