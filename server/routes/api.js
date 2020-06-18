const express = require('express')
const router = express.Router()
const Transaction = require('../model/TransDoc')

router.post('/transaction', async function(req, res){
    const transaction = new Transaction(req.body)
    await transaction.save()
    res.send(transaction)
})

router.delete('/transaction/:id', async function(req, res){
    const id = req.params.id
    const transaction = await Transaction.findOneAndDelete({"_id" : id})
    res.send(transaction)
})

router.get('/transactions', async function(req, res){
    const transactions = await Transaction.find()
    res.send(transactions)
})



module.exports = router