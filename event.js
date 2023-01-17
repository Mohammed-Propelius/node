// Event emitter
const EventEmitter = require('events')
const myEmitter = new EventEmitter()
myEmitter.on("newSale",() => {
    console.log("There was a sales!!")
})
myEmitter.on("newSale",() => {
    console.log("The customer was Mohammed")
})

myEmitter.on("newSale",(stocks) => {
    console.log(`There were ${stocks} items left in stocks`)
})
myEmitter.emit("newSale",9)