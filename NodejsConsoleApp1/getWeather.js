'use strict'
const express = require('express')
const superagent = require('superagent')
const app = express()

app.get("*", sendWeatherOfRandomCity)

function sendWeatherOfRandomCity(req, response) {
    getWeatherForCity(req, response)
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
    console.error("@@Error: " + err)
}

let counter = 0
function getWeatherForCity(request, response) {
    try {
        ++counter
        let fs = require("fs")
        fs.writeFile("req_file_" + counter + ".html", request.query, traceError)
        console.log(request)

        const city = GetCityNameFromReq(request)
        console.log(`Getting location for: ${city}`)

        const reqAddr = `wttr.in${request.originalUrl}`
        superagent.get(reqAddr)
            .end((err, res) => {
                if (err) {
                    console.log('Unable to complete request: ' + reqAddr)
                    return response.status(res.status).send('There was an error getting the weather, try looking out the window')
                }
                const responseText = res.text
                // console.log(res.text)
                fs.writeFile("resp_file_" + counter + ".html", responseText, traceError)
                response.send(responseText)
            })
    }
    catch (err) {
        response.end(500)
    }
    console.log('Fetching the weather, please be patient')
}
let port = 8080
app.listen(port, () => console.log("Listen on port " + port))