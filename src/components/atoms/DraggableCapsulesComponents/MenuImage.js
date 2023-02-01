import React from "react";
import { TiSortNumerically as NumberIcon, TiDocumentText as StringIcon, TiInputChecked as BooleanIcon } from 'react-icons/ti';
const MenuImage = (props) => {
    const { type } = props;

    const icon = (type) => {
        switch (type) {
            case "number":
                return <NumberIcon className=" inline-block w-6 h-6  text-violet-500" />
            case "boolean":
                return <BooleanIcon className="inline-block w-6 h-6  text-violet-500" />
            default:
                return <StringIcon className="inline-block w-6 h-6  text-violet-500" />
        }
    }


    return (
        <div className=" rounded-l-full p-2 bg-violet-300">
            {icon(type)}
        </div>
    )
}
export default MenuImage;