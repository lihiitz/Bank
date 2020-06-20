import React from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

function Transaction(props) {
    const handleClick = () => {
        props.removeFunc(props.data._id)
    }
    const data = props.data
    const color = data.amount > 0 ? 'green' : 'red'
    return (
        <TableRow style={{background: color}} key={data.key}>
            <TableCell component="th" scope="row">{data.category}</TableCell>
            <TableCell align="right">{data.vendor}</TableCell>
            <TableCell align="right">{data.amount}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="delete" onClick={handleClick}><DeleteIcon /></IconButton>
            </TableCell>
        </TableRow>
    )
}

export default Transaction