import searchIcon from '../img/search-icon.svg';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';


const AdminTable = ({ handleClick }) => {

    const [tableData, setTableData] = useState([]);
    const [filteredTableData, setFilteredTableData] = useState([]);
    const [rowIdActive, setRowIdActive] = useState();
    const [inputValue,setInputValue] =useState("");

    const updateState = (tableRow, currentRowIndex) => {
        handleClick(tableRow);
        
        setRowIdActive(currentRowIndex)
    }

    useEffect(() => {
        fetch("http://www.filltext.com/" + 
        "?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D" + 
        "&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
            .then(res => res.json())
            .then(response => {setTableData(response) ;setFilteredTableData(response)});
    }, []);

    const handleSearch=(event)=>{
        
        // const getIds=tableData.map(data=>data);
        console.log("input Value",inputValue)
        const filterData= tableData.filter((item)=>item.firstName.includes(inputValue)||(item.id+"").includes(inputValue));
        setFilteredTableData(filterData);
        
        console.log("filter Data",filterData);
    }

    return (

        <div id="table-section">

            <form action="#" onSubmit={(e)=>{e.preventDefault(); handleSearch(e)}}>
                <img src={searchIcon} alt="Search Icon" onClick={handleSearch}/>
                <input type="text" placeholder="Enter something" 
                name="search-box" id="search-box" 
                value={inputValue} 
                onChange={(e)=>{setInputValue(e.target.value) }}/>
                
            </form>

            <div id="table-wrapper">

                <div id="table-headers">
                    <table>
                        <thead>
                            <tr>
                                <th className="column1">Id</th>
                                <th className="column2">FirstName</th>
                                <th className="column3">LastName</th>
                                <th className="column4">Email</th>
                                <th className="column5">Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id="table-data">
                    <table>
                        <tbody>
                            {filteredTableData.map(
                                (tableRow, currentRowIndex) => {
                                    return (<tr id={currentRowIndex} 
                                    className={"data-row " + (rowIdActive === currentRowIndex && "active")} 
                                    onClick={(e) => updateState(tableRow, currentRowIndex)}>

                                        <td className="column1">{tableRow.id}</td>
                                        <td className="column2">{tableRow.firstName}</td>
                                        <td className="column3">{tableRow.lastName}</td>
                                        <td className="column4">{tableRow.email}</td>
                                        <td className="column5">{tableRow.phone}</td>
                                    </tr>)
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    );
}

export default AdminTable;
