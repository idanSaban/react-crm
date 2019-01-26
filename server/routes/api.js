const express = require('express')
const router = express.Router()
const Client = require('../models/client')
const Analytics = require('../scripts/analyticsCalculator')

router.get('/sanity', function (req, res) {
    res.send("server is working")
})

router.get('/clients', async function (req, res) {
    const clients = await Client.find({})
    res.send(clients)
})

router.get('/clients/actions', async function (req, res) {
    const clients = await Client.find({})

    res.send(
        clients.map(c => {
            return {
                id: c.id,
                name: c.name,
                owner: c.owner,
                emailType: c.emailType,
                sold: c.sold
            }
        })
    )
})

router.post('/client', async function (req, res) {
    const newClient = new Client(req.body)
    await newClient.save()
    console.log(newClient.name)
    res.send(newClient)
})

router.put('/client/:id', async function (req, res) {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true })
    console.log(updatedClient)
    res.send(updatedClient)
})

router.get('/analytics', async function (req, res) {
    const clients = await Client.find({})
    const calc = new Analytics(clients)
    res.send(calc.getAnalytics())
})

module.exports = router;
