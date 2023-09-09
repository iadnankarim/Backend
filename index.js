const express = require("express");
const app =express();
const path =require("path");
const port =3000;

app.set("view engine ", "ejs");
app.set("views", path.join(__dirname , "./views"));

app.get("/", (req, res) =>{
    // res.send("this is home");
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    // const followers = ["Adnan" ,"Nouman","Burhan","abc"]
    //username data save
    let {username} = req.params;
    const instaData = require("./data.json")
    // console.log(instaData);
    // let {username} = req.params;
     //data store
    const data =instaData[username];
    //verify data
    console.log(data);
    res.render("instagram.ejs" , {data});
});

app.get("/hello", (req,res) =>{
    res.send("hello");
})

app.get("/rolldice", (req, res)=>{
    let diceVal = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs" ,{diceVal});
});

app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
});

