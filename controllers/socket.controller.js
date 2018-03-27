let io = require("socket.io")
let onlineUsers = [];
let socket = io.listen(require("../app.js").server);
socket.on('connection', function(s){
    console.log('a client is connected');
    
    onlineUsers.push(s);
   console.log("connect", onlineUsers);  
   s.on('disconnect', function(s){
    onlineUsers= onlineUsers.filter((s)=> s._id !=s._id);
    console.log("disconnect", onlineUsers);
 })  
})
