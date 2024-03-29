import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectToDB = async () => {
    mongoose.set('strictQueruy', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });

        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }
}
