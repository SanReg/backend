const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors({
  origin: 'https://wrc.lol/new.html',
  credentials: true // if you need cookies or auth headers
}));

//app.use(cors()); //to allow it from everywhere

app.get("/",(req,res)=>{
    res.json({
        name: "Santosh",
        message: "Message from the server"
    })
})

app.listen(PORT,()=>{
    console.log("App listening!")
})