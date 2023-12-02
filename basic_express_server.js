const expres = require("express");
const app = expres();

app.get("/", (req, res) => {
  res.send("hello i am on home page ");
});

app.get("/about", (req, res) => {
  res.send(
    "hello i am on about page " + req.query.name + " and my id is " + req.query.id
  );
});

app.listen(8001, () => {
  console.log("server started");
});


