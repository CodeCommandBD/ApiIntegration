// use npm i random-fruits-name
// extarnal module
const http = require("http");
const getRandomFruitsName = require('random-fruits-name')

const port = 8080;

const server = http.createServer((req, res)=>{
    res.end(getRandomFruitsName())
});


server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});