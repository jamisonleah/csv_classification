import React from 'react';

const VioletButton = ({text , eventHandler}) => {
    return (
        <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-1 px-5 rounded-xl" onClick={eventHandler}>
            {text}
        </button>

    );
};

export default VioletButton;
