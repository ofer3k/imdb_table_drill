import React from 'react'
export default function CustomCell(props) {
    const {customCell,fullData}=props    
    return (
        <td>{customCell==='Trailer'?fullData.Trailer.url:fullData[customCell]}</td>
    )
}
