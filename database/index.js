const mongoose = require('mongoose')
async function connectDB() {
    try {
        // const url = 'mongodb://0.0.0.0:27017/pinterestClone';
        const url = "mongodb+srv://VenkatesuluD:289919@cluster0.ju6pfuk.mongodb.net/?retryWrites=true&w=majority"
        mongoose.connect(url);
        console.log('connected successfully');
    } catch (error) {
        console.log('connection not done');
    }
}
module.exports = connectDB;