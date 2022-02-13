let express = require('express')
let apiRoutes = require("./api-routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let port = process.env.PORT || 8080;
let dbuser = process.env.DBUSER || "";  //Add DBUSER
let dbpass = process.env.PASS || "";    //Add Password

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json())
app.use('/api', apiRoutes)



let uri = `mongodb+srv://${dbuser}:${dbpass}@cluster0.ihjtu.mongodb.net/Demo?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true });
let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.listen(port, function () {
    console.log("Running on port " + port);
});
