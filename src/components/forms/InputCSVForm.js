import React from "react";
import { useState } from "react";
import Papa from "papaparse";


const InputCSVForm = (props) => {

    const handleFileUpload = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            complete: (results) => {
                props.setCsvData(results.data)
                props.setHeaders(results.meta.fields)
            }
        });
    }
    
    return (
        <form>
        <div class="items-center mx-auto p-5">
            <input type="file" onChange={handleFileUpload} class="bg-violet-500 p-2 rounded-lg text-white hover:bg-violet-600" />
        </div>
        </form>
    )}; 



export default InputCSVForm;