import React, {Component} from 'react'

class Transaction extends Component{
    handleClick = () => {
        this.props.removeFunc(this.props.data._id)
    }
    render(){
        const data = this.props.data
        return(
            <div className="transaction">
                <div className={data.amount > 0 ? "green" : "red"}>
                    {data.amount} {data.vendor} {data.category}
                    <button onClick={this.handleClick}>Delete Transaction</button>
                </div>
            </div>
        )
    }
}

export default Transaction