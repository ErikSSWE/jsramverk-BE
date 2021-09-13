const config = require("./config.json");

const dsn = process.env.MONGODB_DSN || `mongodb+srv://${config.username}:${config.password}@cluster0.jarpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = {
    url: dsn
};
