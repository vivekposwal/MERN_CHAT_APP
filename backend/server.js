const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API IS RUNNING SUCCESSFULLY");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  //console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
