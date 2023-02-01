import React, { useState } from 'react';
import { TiSortNumerically as NumberIcon, TiDocumentText as StringIcon, TiInputChecked as BooleanIcon } from 'react-icons/ti';
import { HiOutlineDotsHorizontal as MenuIcon } from 'react-icons/hi';
import { GrHide as HideIcon, GrFormView as ShowIcon } from 'react-icons/gr';
const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const [selectedValue, setSelectedValue] = useState(0);
  const options = ["string", "number", "boolean"];

  const toggle = () => setIsOpen(!isOpen);

  const toggleHide = () => {
    setVisibility(!visibility);
    props.hide();
    toggle();
  }

  const handleClick = (value, type) => {
    props.changeType(type);
    setSelectedValue(value);
  }

  const renderIcon = (type) => {
    switch (type) {
      case "number":
        return <NumberIcon className="inline-flex w-7 h-7 text-gray-800 mr-5" />
      case "boolean":
        return <BooleanIcon className="inline-flex w-7 h-7 text-gray-800 mr-5" />
      default:
        return <StringIcon className="inline-flex w-7 h-7 text-gray-800 mr-5" />
    }
  }


  const renderOptions = ({ option, index }) => {
    return (
      <button onClick={() => handleClick(index, option)}
        className={`bg-${selectedValue === index ? 'violet-200' : ''} rounded-lg text-black font-medium text-xs inline  text-left py-2 px-4 w-full ${selectedValue === 0 ? 'active' : ''}`}>
        {renderIcon(option)}
        {option}

      </button>
    )

  }

  const renderHide = () => {
    return (
      !props.item.hidden ? (
        <button onClick={toggleHide} className="inline-block  rounded-b-lg  w-full text-left px-4 py-3 text-xs font-medium bg-white text-gray-500 hover:bg-violet-200">
          <HideIcon className="inline-block w-5 h-5 text-violet-600 mr-5" />
          Hide
        </button>
      )
        : (
          <button onClick={toggleHide} className="inline-block  w-full text-left px-4 py-3 text-xs font-medium bg-white text-gray-500 hover:bg-violet-200">
            <ShowIcon className="inline-block w-5 h-5 text-violet-600 mr-5" />
            Show
          </button>
        )
    )

  }

  return (
    <div class="relative block">
      <button
        class="bg-violet-300 text-violet-700  font-bold text-sm py-2 px-4 rounded-r-full"
        onClick={toggle}
      >
        <MenuIcon className="inline-block w-5 h-5 text-violet-600 " />
      </button>
      {isOpen && (
        <div className="absolute z-10 right-0 w-48 m-2 bg-white rounded-lg shadow-md" >
          {options.map((option, index) => { return renderOptions({ option, index }) })}
          <div>
            <hr className="border-gray-300 border-dashed " />
          </div>
          {renderHide()}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;