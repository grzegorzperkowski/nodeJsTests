'use strict'
const express = require('express')
const superagent = require('superagent')
const app = express()

app.get("*", sendWeatherOfRandomCity)

function sendWeatherOfRandomCity(request, response) {
    try {
        const reqAddr = `onet.pl${request.originalUrl}`
        console.log(reqAddr.substr(0, 30));
        superagent.get(reqAddr)
            .end((err, res) => {
                if (err) {
                    console.log('Unable to complete request: ' + reqAddr)
                    return response.status(res.status).send('There was an error getting the weather, try looking out the window')
                }
                const responseText = res.text
                response.send(responseText)
            })
    }
    catch (err) {
        response.end(500)
    }
}


function GetCityNameFromReq(request) {
    const arr = request.originalUrl.split("/").filter(el => el.trim().length != 0)
    if (arr.length == 0) {
        return ""
    }
    else if (arr.length == 1) {
        return arr[0]
    }
    return request.originalUrl
}

function traceError(err) {
    if(err != undefined || err != null)
        console.error("@@Error: " + err)
}

let counter = 0
function handleRequest(request, response) {

}
let port = 8080
app.listen(port, () => console.log("Listen on port " + port))