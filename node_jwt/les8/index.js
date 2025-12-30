// Express.js 

const app = require('./app');


const PORT = 3000;

app.get('/', (req, res) =>{
    res.send("Hello World!")
    res.end()
})
app.post('/about', (req, res) =>{
    res.send("About Page")
    res.end()
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
