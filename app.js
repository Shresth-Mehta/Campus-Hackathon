var express=require("express");
var app= express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var reviews = [
        {name: "Pratiyush Mishra", review: "Very Tough course indeed.You need a lot of practice.It involves a lot of linear alzebrea which must be practiced regularly.You just cannot miss even a single class as the course moves at a very impressive speed."},
        {name: "Umang Goel", review: "Very Tough course indeed.You need a lot of practice.It involves a lot of linear alzebrea which must be practiced regularly.You just cannot miss even a single class as the course moves at a very impressive speed."},
        {name: "Divyanshu Saxena", review: "Very Tough course indeed.You need a lot of practice.It involves a lot of linear alzebrea which must be practiced regularly.You just cannot miss even a single class as the course moves at a very impressive speed."},
        {name: "Raghav", review: "Very Tough course indeed.You need a lot of practice.It involves a lot of linear alzebrea which must be practiced regularly.You just cannot miss even a single class as the course moves at a very impressive speed."}
       
];


app.get("/",function(req,res){
    res.render("first");
});

app.get("/second",function(req,res){
    res.render("second");
});
app.get("/second/third",function(req,res){
    res.render("third");
});

app.get("/second/third/fourth", function(req, res){
    res.render("fourth",{reviews:reviews});
});

app.get("/second/third/fourth/new", function(req, res){
    res.render("new");
});

app.post("/second/third/fourth", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var review = req.body.review;
    var newreview = {name: name, review: review}
    reviews.push(newreview);
    //redirect back to campgrounds page
    res.redirect("/second/third/fourth");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server started!!");
});