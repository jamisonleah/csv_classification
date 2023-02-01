import React, { useState } from "react";

function TagForm() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();
    setTags([...tags, tagInput]);
    setTagInput("");
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };

  return (
    <div class="block w-full bg-violet-100 p-10 m-5 rounded-3xl mx-auto">
      <form onSubmit={handleAddTag} class="mx-auto mb-10">
        <div class="flex mx-auto">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Enter a tag"
            class=" focus:outline-none focus:bg-white border-violet-300 border-2 focus:border-purple-500 text-violet-400 p-1 w-1/2 rounded-l-xl"
          />
          <button class="btn bg-violet-500 hover:bg-violet-700 text-white p-2 rounded-r-xl w-1/2" >
            Add
          </button>
        </div>
      </form>
      <div class="flex flex-wrap">
        {tags.map((tag, index) => (
          <div key={index} class="bg-violet-200 rounded-full px-4 py-2 mr-2 mb-2 text-sm font-medium text-violet-700 active:border-violet-700">
            {tag}
            <button
              class="btn bg-violet-400 text-white hover:bg-rose-900 p-2 rounded-full ml-2" onClick={() => handleRemoveTag(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagForm;
