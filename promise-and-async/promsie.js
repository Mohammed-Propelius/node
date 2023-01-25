// Callback hell problems
const fs = require('fs')
const superagent = require("superagent")

fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
    superagent.get(`https://dog.ceo/api/breed/${data}/images
    `).end((err,res) => {
        const data = res.body.message;
        fs.writeFile('dog-file.txt',data.toString(),err => {
            console.log('Random image save')
        })
    })  

    
})

