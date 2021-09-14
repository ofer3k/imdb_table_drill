import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import CustomCell from './CustomCell';

export default function Element(props) {
const {info,fields,customCell,fullData}=props

// Reduce the object to fit the configuration array
const newObject = Object.keys(info).reduce(function(newObj,key) {
    if (fields.indexOf(key) !== -1) {
        newObj[key] = info[key];
    }
    return newObj;
}, {});

    return (
        <>
        {/* Return only the required fields */}
        {fields.map(element => <td key={uuidv4()}>{newObject[element]}</td>)}
        <CustomCell customCell={customCell} fullData={fullData} />
        </>
    )
}
