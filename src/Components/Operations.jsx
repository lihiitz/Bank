import React, { useState } from 'react'
import DelayLink from 'react-delay-link'
import { Button, Input, makeStyles, FormControl, Snackbar } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}))

function Operations(props) {

    const classes = useStyles()

    let [open, setOpen] = useState(false)
    let [amount, setAmount] = useState("")
    let [vendor, setVendor] = useState("")
    let [category, setCategory] = useState("")

    const handleOperation = (num) => {
        props.addFunc({ amount: amount * num, vendor, category })
        setOpen(true)
    }

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'setAmount') {
            setAmount(value)
        } else if (name === 'setVendor') {
            setVendor(value)
        } else {
            setCategory(value)
        }
    }
    return (
        <div>
                <Input className={classes.margin}
                    name="setAmount"
                    value={amount}
                    placeholder="Amount"
                    onChange={handleInput}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <Input className={classes.margin}
                    name="setVendor"
                    value={vendor}
                    placeholder="Vendor"
                    onChange={handleInput}
                />
                <Input className={classes.margin}
                    name="setCategory"
                    value={category}
                    placeholder="Category"
                    onChange={handleInput}
                />

            <DelayLink delay={2000} to="/">
                <FormControl className={classes.margin}>
                <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message="operation completed"
                    />
                    <Button variant="contained" style={{ background: "green" }} onClick={() => handleOperation(1)}>Deposit</Button>
                </FormControl>
                <FormControl className={classes.margin}>
                    <Button variant="contained" color="secondary" onClick={() => handleOperation(-1)}>Withdraw</Button>
                </FormControl>

            </DelayLink>
        </div>
    )
}

export default Operations