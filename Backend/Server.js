const express = require('express');
const server = express();

server.set("view engine", "ejs");
server.use(express.static('views'));

server.get('/',(req,res)=>{
    res.render("index");
})

server.get('/login.html',(req,res)=>{
    res.render("login");
})

server.get('/blog.html',(req,res)=>{
    res.render("blog");
})

server.get('/blog1.html',(req,res)=>{
    res.render("blog1");
})

server.get('/blog2.html',(req,res)=>{
    res.render("blog2");
})
server.get('/blog3.html',(req,res)=>{
    res.render("blog3");
})
server.get('/addtocart',(req,res)=>{
    res.render("addtocart")
})
server.get('/blog4.html',(req,res)=>{
    res.render("blog4");
})

server.get('/policy.html',(req,res)=>{
    res.render("policy");
})

server.get('/Rename.html',(req,res)=>{
    res.render("Rename");
})

server.get('/info',(req,res)=>{
    res.render("info");
})

server.get('/info2',(req,res)=>{
    res.render("info2");
})

server.get('/info3',(req,res)=>{
    res.render("info3");
})

server.get('/info4',(req,res)=>{
    res.render("info4");
})

server.get('/info5',(req,res)=>{
    res.render("info5");
})

server.get('/info6',(req,res)=>{
    res.render("info6");
})

server.get('/info7',(req,res)=>{
    res.render("info7");
})

server.get('/info8',(req,res)=>{
    res.render("info8");
})

server.get('/info9',(req,res)=>{
    res.render("info9");
})

server.get('/info10',(req,res)=>{
    res.render("info10");
})

server.get('/info11',(req,res)=>{
    res.render("info11");
})

server.get('/service',(req,res)=>{
    res.render("service");
})

server.get('/checkout',(req,res)=>{
    res.render("checkout");
})
// server.get('/info11',(req,res)=>{
//     res.render("info11");
// })s

server.listen(3000,()=>{
    console.log("Listening on port 3000......")
});