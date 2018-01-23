function testTimeout() {
    console.log("Begin")
    setTimeout(function () {
        console.log("Done!")
    }, 3 * 1000)
    console.log("Waiting..")
}

process.nextTick(testTimeout)