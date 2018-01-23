'use strict'

let fun = function(path){
    let buff;
    const fs = require("fs")
    let o = fs.open(path, 'r', (err, fd) =>{
        if(err!=null)
        {
            console.log("opening file")
            fs.readFileSync(fd,)
        }
     });

     console.log("@@@: " + o);

    return "test"
}

fun("g:\\1.prn")



// const https = require('https');
// const fs = require('fs');

// const { URL } = require('url');

// function toNumber(number) { if (number < 10) return '0' + number; else return number; }

// for (var i = 1; i <= 81; i++) {
//     const options = new URL("https://flipbook.apps.gwo.pl/book/getImage/bookId:2399/pageNo:" + i)
//     const g = i
//     const file = "file_" + toNumber(i) + ".jpg"

//     console.log(file)

//     const req = https.request(options, (res) => {
//         res.on('data', (d) => {
//             fs.appendFileSync(file, d, "binary", (err) => {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("saved")
//                 }
//             })
//         })
//         res.on("error", (error) => {
//             if (error)
//                 cole.warn(error)
//         })
//     })

//     req.end();
// }