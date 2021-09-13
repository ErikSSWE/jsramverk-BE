/*const config = require("./config.json");

const dsn = process.env.MONGODB_DSN || `mongodb+srv://${config.username}:${config.password}
@cluster0.jarpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
*/
const dsn = "mongodb://localhost:27017/erik_test";

if (process.env.NODE_ENV === 'test') {
    // We can even use MongoDB Atlas for testing
}

module.exports = {
    url: dsn
};
