import React, { Component } from 'react'
import Transaction from './Transaction';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, makeStyles, withStyles } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell)

function Transactions(props) {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Amount</StyledTableCell>
                        <StyledTableCell align="right">Vendor</StyledTableCell>
                        <StyledTableCell align="right">Category</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.data.map((d, i) => <Transaction key={i} data={d} removeFunc={props.removeFunc} />)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Transactions