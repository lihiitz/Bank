import React from 'react'
import { makeStyles, TableContainer, TableHead, TableBody, Paper, TableCell, Table, TableRow, withStyles } from '@material-ui/core'

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

function SumCategories(props) {
    const classes = useStyles()
    let table = {}
    props.data.forEach(element => {
        if (table[element.category]) {
            table[element.category] += element.amount
        } else {
            table[element.category] = element.amount
        }
    })

    const categories = Object.keys(table)
    let rows = categories.map(c => {
        let row = { category: c, amount: table[c] }
        return row
    })

    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Category</StyledTableCell>
                        <StyledTableCell align="right">Amount</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.category}>
                            <TableCell component="th" scope="row">
                                {row.category}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SumCategories