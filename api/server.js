const express = require("express");

const server = express();

server.use(express.json());

server.use("*", (req, res) => {
  res.json("Express server is working.");
});

module.exports = server;
