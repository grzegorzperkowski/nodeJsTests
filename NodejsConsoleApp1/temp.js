const fs = require("fs")


fs.unlink("g:\\1.bak", () => {/*ignore errors*/ })

const writeStream = fs.createWriteStream("g:\\1.bak", { encoding: "binary" })
writeStream.on("error", error => console.log(error))

String.prototype.getFirstChars = function () {
    return this.substr(0, 5)
}

const readStream = fs.createReadStream("g:\\1", { encoding: "binary" })
let lastChunk;

writeStream.on("drain", () => {
    writeStream.write(lastChunk, () => {
        console.log("Write: " + lastChunk.getFirstChars())
        readStream.resume()
    })
})

let first = true;

readStream.on("data", chunk => {
    try {
        writeStream.write(chunk)
        readStream.pause()
        writeStream.once()
        lastChunk = chunk
        console.log("Read: " + lastChunk.getFirstChars())
    }
    catch (error) {
        console.log("@@@@@: " + error)
        process.abort()
    }
})

readStream.on("end", () => { writeStream.end(); console.log("end read file") })
readStream.on("error", error => {
    console.log("Read error " + error);
    write.end("end writing")
})