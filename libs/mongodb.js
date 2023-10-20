import mongoose from "mongoose";


export default async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongodb is connected')
    }
    catch(error) {
        console.log(error)
    }
}