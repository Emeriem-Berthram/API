const express = require('express')

const bodyParser = require("body-parser")

const app = express()

const PORT = 3000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.post('/api/user', ( req,res) => {
    res.send("Hello Emerie ?")
})

app.post('/api/user', ( req,res) => {
    res.send("Hello Emerie");
    console.log("This is my post request")
})

app.post('/api/user', ( req,res) => {
    const body = req.body
    res.json({message: "post successful", "body" : body})
})

app.get('/api/user', (req, res) => {
    
    res.json({"message": "Get all users"})
})

app.get('/api/user/:id', (req, res) => {
    const id = req.params.id
    res.json({"message":"Get a user with the id" + id})
})

app.put('/api/user/:id', (req, res) => {
    //this is used to get the route parameter
    const id = req.params.id
    //this is used to get the message
    res.json({"message":"this user with the id ${id} has been updated"})
});

app.patch('/api/user/:id', (req, res) => {
    const id = req.params.id
    res.json({"message":`this user with the id $ {id} has been updated`})
})

app.delete('/api/user/:id', (req, res) => {
    const id = req.params.id
    res.json({"message":`this user with the id $ {id} has been deleted`})
})

app.listen(3000, () => {
    console.log('server is running')
})  
 
 
