import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

function Navbar(props) {
    const classes = useStyles()
    let balance = props.balance
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={9}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Link to="/">TRANSACTIONS</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Link to="/operations">OPERATIONS</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Link to="/sumCategories">BREAKDOWN</Link>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
            <Paper className={classes.paper} style={{ color: "white", background: balance > 500 ? "green" : "red" }}>
                BALANCE: ${balance}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Navbar