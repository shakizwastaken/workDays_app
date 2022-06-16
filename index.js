const { json } = require("express");
const express = require("express");
const { checkDate } = require("./checkDate");
const app = express();

const port = 5500;

//not sure what this does.
app.use(express.static(__dirname + "/public"));

//json middleware
app.use(json());

//date check middleware
app.use(checkDate);

//index.html page
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/view/index.html");
});

//contact us page
app.get("/contact-us", (req, res) => {
  res.status(200).sendFile(__dirname + "/view/contactUs.html");
});

//our services page
app.get("/our-services", (req, res) => {
  res.status(200).sendFile(__dirname + "/view/ourServices.html");
});

app.listen(port, () => {
  console.log(`live on http://localhost:${port}/`);
});
