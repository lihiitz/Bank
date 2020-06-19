import React, { Component, useState } from 'react'
import DelayLink from 'react-delay-link'
import { Button, Input, InputLabel, makeStyles, FormControl } from '@material-ui/core'
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

    let [amount, setAmount] = useState("")
    let [vendor, setVendor] = useState("")
    let [category, setCategory] = useState("")

    const handleOperation = (num) => {
        props.addFunc({ amount: amount * num, vendor, category })
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
        <div className={classes.root}>

            <FormControl className={classes.margin}>
                <Input
                    id="standard-adornment-amount"
                    name="setAmount"
                    value={amount}
                    placeholder="Amount"
                    onChange={handleInput}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <FormControl className={classes.margin}>
                <Input
                    id="standard-adornment-vendor"
                    name="setVendor"
                    value={vendor}
                    placeholder="Vendor"
                    onChange={handleInput}
                />
            </FormControl>
            <FormControl className={classes.margin}>
                <Input
                    id="standard-adornment-category"
                    name="setCategory"
                    value={category}
                    placeholder="Category"
                    onChange={handleInput}
                />
            </FormControl>
            
            <DelayLink delay={1500} to="/">
                <FormControl className={classes.margin}>
                    <Button variant="outlined" color="primary" onClick={() => handleOperation(1)}>Deposit</Button>
                </FormControl>
                <FormControl className={classes.margin}>
                    <Button variant="outlined" color="secondary" onClick={() => handleOperation(-1)}>Withdraw</Button>
                </FormControl>

            </DelayLink>
        </div>
    )
}

export default Operations