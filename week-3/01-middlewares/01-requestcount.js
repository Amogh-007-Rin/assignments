// SOLUTIONS FOR ASSIGNMENT 01 MIDDLEWARE /01

const express = require("express");
const app = express();
const port = 3000;

count = 0;

function countUser(req,res,next){
  count++;
  next()
}


app.use(countUser)

app.get("/username", function(req,res){
  res.status(200).json({ name : "Jhon", count});
});

app.post("/books", function(req,res){
  res.status(200).json({ issuedBooks : "mathematics and physics", count});
});

app.post("/games", function(req,res){
  res.status(200).json({ favorateGames : "BGMI and CALL OF DUTY MODREN WAREFARE", count});
});

app.post("/anime", function(req,res){
  res.status(200).json({ favorateAnime: "Demon Slayer", count});
});
app.listen(port)