import React from 'react';
// import List from '../Data list'


const Details = (props) =>{

    console.log(props.rowdata)
   return(

         <div id="info-wrapper">
                   
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            {Object.keys(props.rowdata).length>0 &&
            (
            <div id="info-content" style={{display : 'block'}} >
                <div><b>User selected:</b> {props.rowdata.firstName} {props.rowdata.lastName}</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readOnly value = {props.rowdata.description} />
                        
                </div>
                <div><b>Address:</b> {props.rowdata.address.streetAddress}</div>
                <div><b>City:</b> {props.rowdata.address.city}</div>
                <div><b>State:</b> {props.rowdata.address.state}</div>
                <div><b>Zip:</b> {props.rowdata.address.zip}</div>
            </div>
            )}
        </div>

         
     );
}

export default Details;