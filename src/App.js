import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Transactions from './Components/Transactions';
import Operations from './Components/Operations';
import axios from 'axios';
import SumCategories from './Components/SumCategories';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
})

function App() {

  const classes = useStyles()
  let [data, setData] = useState([])

  const totalBalance = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return (data.map(d => d.amount).reduce(reducer, 0))
  }

  const removeTransaction = async (id) => {
    const response = await axios.delete(`http://localhost:3001/transaction/${id}`)
    // const response = await axios.delete(`/transaction/${id}`)
    let tempTrans = [...data]
    let index = tempTrans.findIndex(t => t._id === id)
    tempTrans.splice(index, 1)
    setData(tempTrans)
  }

  const addTransaction = async (transaction) => {
    const response = await axios.post("http://localhost:3001/transaction", transaction)
    // const response = await axios.post("/transaction", transaction)
    let tempTransactions = [...data]
    tempTransactions.push(response.data)
    setData(tempTransactions)
  }

  // const componentDidMount = async() => {
  //   const response = await axios.get("http://localhost:3001/transactions")
  //   // const response = await axios.get("/transactions")
  //   setData(response.data)
  // }

  useEffect(() => {
    async function fetchData () {
      const response = await axios.get("http://localhost:3001/transactions")
      // const response = await axios.get("/transactions")
      setData(response.data)
    }
    fetchData()
  }, [])

  let balance = totalBalance()
  return (
    <Router>
      <div>

        {/* <BottomNavigation showLabels  onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="TRANSACTIONS" value="transactions"/>
          <BottomNavigationAction label="OPERATIONS" value="operations"/>
          <BottomNavigationAction label="BREAKDOWN" value="breakdown"/>
        </BottomNavigation> */}

        <div className="app">
          <div style={{ color: balance > 500 ? "green" : "red" }}>BALANCE: {balance}</div><br></br>
          <Link to="/">TRANSACTIONS</Link><br></br>
          <Link to="/operations">OPERATIONS</Link><br></br>
          <Link to="/sumCategories">BREAKDOWN</Link>

        </div>
        <Route path="/" exact render={() => <Transactions data={data} removeFunc={removeTransaction} />}></Route>
        <Route path="/operations" exact render={() => <Operations addFunc={addTransaction} />}></Route>
        <Route path="/sumCategories" exact render={() => <SumCategories data={data} />}></Route>
      </div>
    </Router>
  )
}

export default App;
