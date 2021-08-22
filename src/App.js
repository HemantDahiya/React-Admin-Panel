import './App.css';
import preloader from './Component/img/preloader.gif';
import List from './Component/Data list';
import Details from './Component/Details Box';
import { useState } from 'react';

function App() {

const [rowData,setRowData]= useState({});

 const selectedRowData= (data)=>{
  //  console.log(event.currentTarget);
   return setRowData(data);
 }
  return (
    <div>
      <div id="overlay">
            <img src={preloader} alt="Preloader icon" />
        </div>
    <main>
      <List  handleClick={selectedRowData}/>
      <Details rowdata={rowData}/>
      </main>
     </div>
  );
}

export default App;
