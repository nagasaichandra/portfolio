const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  num1 = Number(req.body.num1);
  num2 = Number(req.body.num2);
  result = num1 + num2;

  res.send(
    "The result of addition of " +
      String(num1) +
      " and " +
      String(num2) +
      " is: " +
      String(result)
  );
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  weight = parseFloat(req.body.weight);
  height = parseFloat(req.body.height);
  bmi = weight / (height * height);
  res.send("The BMI Index is " + String(bmi));
});

app.listen(3000);
