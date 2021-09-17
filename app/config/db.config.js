let dsn = process.env.MONGODB_DSN || "mongodb://localhost:27017/docs";

//console.log("Node_ENV: ", process.env.NODE_ENV);

if (process.env.NODE_ENV === 'test') {
    // We can even use MongoDB Atlas for testing
    dsn = "mongodb://localhost:27017/docs_test";
}

module.exports = {
    url: dsn
};
