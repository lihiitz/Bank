import React, {Component} from 'react'
import Transaction from './Transaction';

class Transactions extends Component{
    render(){
        return(
            <div>
                {this.props.data.map((d,i) => <Transaction key={i} data={d} removeFunc={this.props.removeFunc}/>)}
            </div>
        )
    }
}

export default Transactions