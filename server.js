const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = __dirname + '/app/views/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "https://jsramverk-editor-ersr20.azurewebsites.net"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.sendFile(path + "index.html")
});

const db = require("./app/models");
//db.sequelize.sync();
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

require("./app/routes/textEditor.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
