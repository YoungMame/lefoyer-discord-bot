const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connection à MongoDB réussie"))
    } catch (err) {
        console.log(err)
        process.exit()
    }
}

module.exports = connectDB