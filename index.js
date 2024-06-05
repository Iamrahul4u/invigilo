const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const Port = 3000;

app.get("/incidents", (req, res) => {
  console.log(req.url);
  return res.json({ data: 12 });
});

app.listen(Port, () => {
  console.log("server is running");
});
