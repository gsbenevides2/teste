const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Olá mundo")
})

app.listen(process.env.PORT || 7272, ()=>{
    console.log("Rodando")
})