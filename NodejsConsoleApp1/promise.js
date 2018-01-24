// const interval = setInterval(() => {
//     console.log('setInterval')
// }, 0)

// setTimeout(() => {
//     console.log('setTimeout 1')
//     Promise.resolve().then(() => {
//         console.log('promise 3')
//     }).then(() => {
//         console.log('promise 4')
//     }).then(() => {
//         setTimeout(() => {
//             console.log('setTimeout 2')
//             Promise.resolve().then(() => {
//                 console.log('promise 5')
//             }).then(() => {
//                 console.log('promise 6')
//             }).then(() => {
//                 clearInterval(interval)
//             })
//         }, 0)
//     })
// }, 0)

// Promise.resolve().then(() => {
//     console.log('promise 1')
// }).then(() => {
//     console.log('promise 2')
// })


let p1 = new Promise((resolve, rejected) => {
    setTimeout( _ => rejected(new Error("something when wrong!")), 2000)
});

p1.catch(error => console.log("@@@: " + error))
p1.then(result => console.log("SUCCESS: " + result), err => console.log("Error: " + err));