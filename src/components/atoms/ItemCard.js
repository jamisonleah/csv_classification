import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <div className="text-lg font-bold">SEID: {item.SEID}</div>
      <div className="my-4">
        <div className="text-sm font-bold">Prompt Character:</div>
        <div className="text-sm">{item.PromptCharacter}</div>
      </div>
      <div className="my-4">
        <div className="text-sm font-bold">Prompt Dialogue:</div>
        <div className="text-sm">{item.PromptDialogue}</div>
      </div>
      <div className="my-4">
        <div className="text-sm font-bold">Response Character:</div>
        <div className="text-sm">{item.ResponseCharacter}</div>
      </div>
      <div className="my-4">
        <div className="text-sm font-bold">Response Dialogue:</div>
        <div className="text-sm">{item.ResponseDialogue}</div>
      </div>
    </div>
  );
}

export default ItemCard;
