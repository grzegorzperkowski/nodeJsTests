'use strict'
const app = require("express")()


let postReqHandler = function(req, res){
    console.log("POST req")
    res.end(200)
}

let getReqHandler = function(req, res){
    console.log("GET req")
    res.end(200)
}

app.post("/", postReqHandler)
app.get("/", getReqHandler)

app.listen(8080, () => console.log("started listen"))
