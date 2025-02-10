import express from "express"
import {createServer} from "http"
import { Server } from "socket.io";
const app=express();
const server= createServer(app)
const io= new Server(server,{
    cors:"*",
    
})
io.on('connection',(socket)=>{
    console.log("socket io is connect hua browser")
    socket.emit("message","aur bhai")
})
server.listen(3000,()=>{
    console.log("hellor bkl");
})