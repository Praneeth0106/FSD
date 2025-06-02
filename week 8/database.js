const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
let collection;
async function connectDB(dbname, table) {
    let result = await client.connect();
    let db = result.db(dbname);
    collection = db.collection(table);
    console.log("Database Connected...");
    return collection;
}
exports.getData = async function (email) {
    collection = await connectDB("usersDB", "users");
    let response = await collection.find({ email: email }).toArray();
    return JSON.stringify(response);
};
exports.insertData = async function (user) {
    collection = await connectDB("usersDB", "users");
    let response = await collection.insertOne({ name: user.name, email: user.email, password: user.password });
    return JSON.stringify(response);
}