const fs = require('fs')
const crypto = require('crypto')
const start = Date.now()
// --> ThreadPool
process.env.UV_THREADPOOL_SIZE = 2
setTimeout(() => console.log("Timer"),0)
setImmediate(() => console.log("Immedate over"))

fs.readFile('test-file.txt',()=>{
    console.log("I/O finished")
    // --> Event loop example
    process.nextTick(() => console.log("Process.nextTick"))
    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log(Date.now() - start ,"Password encrypt")
    })
    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log(Date.now() - start ,"Password encrypt")
    })
    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log(Date.now() - start ,"Password encrypt")
    })
    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log(Date.now() - start ,"Password encrypt")
    })
})

console.log("Hello from Top Level")