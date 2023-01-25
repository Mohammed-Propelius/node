// Callback hell problems
const fs = require('fs')
const superagent = require("superagent")

const readFilePro = file => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if (err) reject('I could not find that file 😢');
        resolve(data);
      });
    });
  };
  
  const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, data, err => {
        if (err) reject('Could not write file 😢');
        resolve('success');
      });
    });
  };

const getDogPic = async() => {
    try{
        const dogRead = await readFilePro(`${__dirname}/dog.txt`)
        console.log(`Breed:${dogRead}`)
        
        const res1pro = await superagent.get(`https://dog.ceo/api/breed/${dogRead}/images/random`);
        const res2pro = await superagent.get(`https://dog.ceo/api/breed/${dogRead}/images/random`);
        const res3pro = await superagent.get(`https://dog.ceo/api/breed/${dogRead}/images/random`);
        const all = await Promise.all([res1pro,res2pro,res3pro])
        console.log(all)
        
        await writeFilePro('async-dog.txt',res.body.message.toString())
        console.log('Writen successfull')
    }catch(err){
        console.error
    }
}
  
getDogPic()

