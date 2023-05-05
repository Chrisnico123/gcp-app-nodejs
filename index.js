const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "public");

const PORT = 8000;
const HOST = "0.0.0.0";

app.use(express.static(publicPath));

app.listen(PORT, HOST, () => {
  console.log(`run succesfully in http://localhost:${PORT}`);
});
