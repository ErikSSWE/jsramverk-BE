const config = require("./config.json");

const dsn = process.env.MONGODB_DSN || `mongodb+srv://${config.username}:
${config.password}@cluster0.jarpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

if (process.env.NODE_ENV === 'test') {
    // We can even use MongoDB Atlas for testing
    dsn = "mongodb://localhost:27017/test";
}

module.exports = {
    url: dsn
};
