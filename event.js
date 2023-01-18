// Event emitter
const EventEmitter = require('events')
const http = require('http')
class Sales extends EventEmitter{
    constructor() {
        super();
    }
}
const myEmitter = new Sales()
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
// ----------------------------------------------------------
const server = http.createServer()
server.on('request',(req,res)=>{
    console.log("Req received")
    res.end('Request received')
})

server.on('request',(req,res)=>{
   console.log("another request")
})

server.on('close',() => {
    console.log('Server Close')
})

server.listen(8000,'127.0.0.1',()=>{EventEmitter
    console.log("Waiting for req")
})