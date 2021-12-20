const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/posts", (req, res) => {
  res.json("test");
});

app.listen(3000);
