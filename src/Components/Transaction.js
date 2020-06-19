import React, { Component } from 'react'
import { TableRow, TableCell, withStyles, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
        backgroundColor: theme.palette.primary.light,
      },
    },
  }))(TableRow)


function Transaction(props) {
    const handleClick = () => {
        props.removeFunc(props.data._id)
    }
    const data = props.data
    return (

        <StyledTableRow className={data.amount > 0 ? "green" : "red"} key={data.key}>
            <TableCell component="th" scope="row">{data.category}</TableCell>
            <TableCell align="right">{data.vendor}</TableCell>
            <TableCell align="right">{data.amount}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="delete" onClick={handleClick}><DeleteIcon /></IconButton>
            </TableCell>
        </StyledTableRow>
    )
}

export default Transaction