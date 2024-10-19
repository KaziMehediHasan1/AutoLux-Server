// const socketHandler = (io) => {
//   let users = [{}];

  // io.on("connection", (socket) => {
  //   console.log(`New connection: ${socket.id}`);
  //   // sending message to the client
  //   socket.emit('welcome',"welcome to the server");

    // listening for message from client..
    // socket.on("message",(data)=>{
    //   console.log("message",data);
    //   io.emit("message",data);
    // });

    // disconnect event
    // socket.on("disconnect",()=>{
    //   console.log("client disconnected");
    // })

    // Add user to online users list
    // onlineUsers.push(socket.id);
    // io.emit("updateUser", onlineUsers);

    //incoming messages
    // socket.on("sendMessage", ({ content, to }) => {
    //   // Send message to the recipient
    //   io.to(to).emit("receiveMessage", {
    //     content,
    //     from: socket.id,
    //   });
    // });

    // typing indicator
    // socket.on("typing", ({ to }) => {
    //   socket.to(to).emit("typing", { isTyping: true });
    // });

    // stop typing event
    // socket.on("stopTyping", ({ to }) => {
    //   socket.to(to).emit("stopTyping", { isTyping: false });
    // });

    // disconnection
    // socket.on("disconnect", () => {
    //   console.log("User disconnected", socket.id);
    //   onlineUsers = onlineUsers.filter((user) => user !== socket.id);
    //   io.emit("updateUser", onlineUsers);
    // });
//   });
// };

// module.exports = socketHandler;
