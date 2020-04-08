const express = require("express");

const app = express();
console.log(__dirname);
console.log(__filename);
app.get('',(req, res)=> {
    res.send('Hi')
});

app.listen(3000, ()=>{
    console.log('server is up port 3000');
});