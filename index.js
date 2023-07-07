const express = require ('express')

const app = express();
const middleman =(req, res, next)=>{
    console.log("I am MiddleMan1")
    next()
}
app.use(middleman)
const middleman2= (req, res, next)=>{
    console.log("I am Middleman2")
    next()
}
app.get("/main/api/",(req,res)=>{
    res.send("<html><body><h1>Ok Middleman is Running</h1></body></html>")
})
app.get("/api/main/middleman",middleman2,(req, res)=>{
    console.log("I am Middleman3")
    res.send("<html><body><h1>Ok Middleman is Running</h1></body></html>")
})
app.listen(3010,()=>{
    console.log("OK Everythig Working Properly")
})