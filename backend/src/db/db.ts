const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/pulseplay";
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...', process.env.URL);
    } catch (err) {
        console.error(err);
        // make the process fail
        process.exit(1);
    }

}

export default connectDB;