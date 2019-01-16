const express=require("express");
const app=express();
const path=require("path");
const server =require("http").createServer(app);
const io=require("socket.io").listen(server);

//view engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

//static  path
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res,next)=>{
res.send("test");
});

server.listen(3000,()=>{
console.log("server started on port 3000");
})