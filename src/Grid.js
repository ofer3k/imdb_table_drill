import React, { useState } from 'react'
import {Table,Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Element from './Element';
export default function Grid({ config, data }) {
  const [customCell,SetCustomCell]=useState('Your Input')

  //  Converting the config obj to a string For more efficient work
  let configArray=[]
  config.forEach(element => {
   configArray.push(element.field)
 });

 const handleCustomCellChange=(e)=>{
  SetCustomCell(e.target.value)
 }
 
  return (
    <>
    {/* custom cell */}
    <Form.Select onChange={handleCustomCellChange} style={{width:'60%',margin:'0 auto'}} aria-label="Default select example">
  <option hidden >Render a custom cell</option>
  {(Object.keys(data[0])).map((field)=>
  {
    console.log(field)
  return (<option key={uuidv4()} value={field}>{field}</option>)
  })}
</Form.Select>


    <Table style={{width:'60%'}} striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      {/* All the headers */}
      {configArray.map((element)=><th key={uuidv4()}>{element}</th>)}
      <th>{customCell}</th>
    </tr>
  </thead>
  <tbody>
    {/* Looping all data and returning by the config */}
    {data.map((element,i)=>
    <tr key={uuidv4()}>
      <td>{i}</td>     
      <Element fullData={element} customCell={customCell} fields={configArray} info={element} />     
    </tr>
    )}
  </tbody>
</Table>
</>
  )
}
