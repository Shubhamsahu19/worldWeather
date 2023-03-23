const express = require('express');
const path = require('path');
const app = express();
const port=process.env.PORT || 8000;

app.set('view engine','ejs');
app.set('views','views');

//public static path
app.use(express.static(path.join(__dirname,"../public")));


//routimg
app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
});

app.get("*",(req,res)=>{
    res.render('404error')
});


app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
})