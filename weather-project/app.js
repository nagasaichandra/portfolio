const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Sunnyvale&appid=f04788a2f1964ca2196b48429c0187d0&units=imperial";

  https.get(url, function (response) {
    console.log(response.statusCode);
  });
});

app.listen(3000, function () {
  console.log("Server is running at port 3000. ");
});
