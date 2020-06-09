import React, {Component} from 'react'

class Transaction extends Component{
    handleClick = () => {
        this.props.removeFunc(this.props.data._id)
    }
    render(){
        const data = this.props.data
        return(
            <div className="transaction">
                <div>
                    {data.amount} {data.vendor} {data.category}<br></br>
                    <button onClick={this.handleClick}>Delete Transaction</button>
                </div>
            </div>
        )
    }
}

export default Transaction