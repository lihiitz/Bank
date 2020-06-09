import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import DelayLink from 'react-delay-link'

class Operations extends Component{
    constructor(){
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }
    handleDeposit = () => {
        this.props.addFunc({amount: this.state.amount * 1, vendor: this.state.vendor, category: this.state.category})
    }

    handleWithdraw = () => {
        this.props.addFunc({amount: this.state.amount * -1, vendor: this.state.vendor, category: this.state.category})
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <input name="amount" value={this.state.amount} placeholder="Amount" onChange={this.handleInput}></input>
                <input name="vendor" value={this.state.vendor} placeholder="Vendor" onChange={this.handleInput}></input>
                <input name="category" value={this.state.category} placeholder="Category" onChange={this.handleInput}></input><br></br>
                <DelayLink delay={2000} to="/">
                    <button onClick={this.handleDeposit}>Deposit</button>
                    <button onClick={this.handleWithdraw}>Withdraw</button>
                </DelayLink>
            </div>
        )
    }
}

export default Operations