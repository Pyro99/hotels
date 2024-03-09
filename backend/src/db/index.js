import mongoose from "mongoose";

const dbConnect = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.DB_NAME}`);
        console.log(`MongoDB Connected.`);
    }catch(err){
        console.log('DB connection error',err);
        process.exit(1);
    }      
}

export default dbConnect;