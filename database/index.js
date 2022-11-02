
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose')
async function connectDB() {
    try {
        // const url = 'mongodb://0.0.0.0:27017/pinterestClone';
        const url = process.env.MONGO_URI
        mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connected successfully');
    } catch (error) {
        console.log('connection not done');
    }
}
module.exports = connectDB;