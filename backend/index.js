const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})