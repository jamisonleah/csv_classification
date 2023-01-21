import React, { useState } from 'react';
import Papa from 'papaparse';
import '../../index.css';
const CSVTable = () => {
    const [csvData, setCsvData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const handleFileUpload = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            complete: (results) => {
                setCsvData(results.data);
            }
        });
    }

    const handlePageChange = (type) => {
        if (type === 'next' && currentPage < Math.ceil(csvData.length / rowsPerPage)) {
            setCurrentPage(currentPage + 1);
        } else if (type === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

  // action handler to view the selected row on different page 
    const handleView = (value) => {
        console.log(value);
    }


    const renderRows = () => {
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return csvData.slice(start, end).map((row, index) => (
            <tr key={index} className={index % 2 ? "bg-gray-100" : ""}>
                {Object.values(row).map((value, idx) => (
                    <td className="px-4 py-2" key={idx}>{value}</td>
                    
                ))}
                <button className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600" onClick={() => handleView(row)}>View</button>
            </tr>
        ));
    }

    return (
        <div className="px-4 py-2">
            <input type="file" onChange={handleFileUpload} className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600"/>
            {csvData.length > 0 && ( 
                    <table className="table-auto border-2">
                        <thead>
                            <tr>
                                {Object.keys(csvData[0]).map((key) => (
                                    <th className="px-4 py-2" key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </table>
            )}
            {csvData.length > 0 && (
                <div className="flex justify-between">
                    <button className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600" onClick={() => handlePageChange('prev')}>Prev</button>
                    <button className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600" onClick={() => handlePageChange('next')}>Next</button>
                </div>  
            )}
        </div>
        
    );
 }
 export default CSVTable;
