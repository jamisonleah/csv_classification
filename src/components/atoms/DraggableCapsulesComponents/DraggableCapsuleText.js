import React from "react";

const DraggableCapsuleText = ({ item, type }) => {
    switch (type) {
        case "number":
            return (
                <div class=" focus:outline-none focus:bg-white bg-cyan-400 focus:border-cyan-500 text-sm text-white font-sans w-fit p-2 items-center">
                    <p class="text-center whitespace-nowrap overflow-ellipsis "> {item} </p>
                </div>
            );
        case "boolean":
            return (
                <div class=" focus:outline-none focus:bg-white bg-amber-400 focus:border-amber-500 text-sm  text-white font-sans w-fit p-2 items-center">
                    <p class="text-center whitespace-nowrap overflow-ellipsis "> {item} </p>
                </div>
            );
        default:
            return (
                <div class=" focus:outline-none focus:bg-white bg-violet-400 focus:border-purple-500 text-sm text-white font-sans w-fit p-2 items-center">
                    <p class="text-center whitespace-nowrap overflow-ellipsis "> {item} </p>
                </div>
            );

    }
};
    export default DraggableCapsuleText;