const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000;


app.get("/information/mathematics",function(req,res){
    fs.readFile("03-readfile1.txt","utf-8", function(err,data){
        res.send(data)
    })
})

app.get("/information/physics",function(req,res){
    fs.readFile("03-readfile2.txt","utf-8", function(err,data){
        res.send(data)
    })
})

app.get("/information/chemistry",function(req,res){
    fs.readFile("03-readfile3.txt","utf-8", function(err,data){
        res.send(data)
    })
})

app.listen(port)