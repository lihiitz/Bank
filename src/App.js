import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Transactions from './Components/Transactions';
import Operations from './Components/Operations';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  totalBalance = () => {
    // debugger
    let sum = 0
    this.state.data.forEach(element => {
      sum += element.amount
    })
    return sum
  }

  removeTransaction = async(id) => {
    const response = await axios.delete(`http://localhost:3001/transaction/${id}`)
    let tempTrans = [...this.state.data]
    let index = tempTrans.findIndex(t => t._id === id)
    tempTrans.splice(index, 1)
    this.setState({
      data : tempTrans
    })
  }

  addTransaction = async(transaction) => {
    const response = await axios.post("http://localhost:3001/transaction", transaction)
    let tempTransactions = [...this.state.data]
    tempTransactions.push(response.data)
    this.setState({
      data : tempTransactions
    })
  }

  componentDidMount = async() => {
    const response = await axios.get("http://localhost:3001/transactions")
    this.setState({
      data: response.data
    })
  }
  render(){
    return (
      <Router>
        <div>
          <div className="app">
            BALANCE: ${this.totalBalance()}<br></br>
            <Link to="/">Transactions</Link><br></br>
            <Link to="/operations">Operations</Link>

          </div>
          <Route path="/" exact render={() => <Transactions data={this.state.data} removeFunc={this.removeTransaction}/>}></Route>
          <Route path="/operations" exact render={() => <Operations addFunc={this.addTransaction}/>}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
