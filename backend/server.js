const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();


const notes = require('./data/notes')
//Api End point
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/api/notes",(req,res)=>{
    res.send(notes)
})
app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=> n._id===req.params.id)
    res.send(note)
})
//Listening port| 5000
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server stared on PORT ${PORT}`));
