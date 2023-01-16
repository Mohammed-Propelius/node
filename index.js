// Modules
const fs  = require('fs')
const http = require('http')
const url = require('url')
const replaceTemplate = require('./modules/replaceModule')

// SYNC CODE
const tempCard = fs.readFileSync('./templates/template-card.html','utf-8')
const tempOverview = fs.readFileSync('./templates/template-overview.html','utf-8')
const tempProduct  = fs.readFileSync('./templates/template-product.html','utf-8')
const data = fs.readFileSync('./dev-data/data.json','utf-8')
const dataObj = JSON.parse(data)


// SERVERS
const server = http.createServer((req,res) => {
    const {pathname,query} = url.parse(req.url,true)
    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200,{'Content-type':'text/html '})
        const cardHtml = dataObj.map(el => replaceTemplate(tempCard,el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardHtml)
        res.end(output)
    }else if (pathname === '/product'){
        res.writeHead(200,{'Content-type':'text/html '})
        const product = dataObj[query.id]
        const output = replaceTemplate(tempProduct,product)
        res.end(output)
    }
    else if(pathname === '/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data)
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html'
        })
        res.end('<h1>Page not Found</h1>')
    }
})

server.listen(8000,'127.0.0.1',() => {
    console.log('Listing Req on Port 8000')
})