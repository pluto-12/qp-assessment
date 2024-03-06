import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.dbConnectionString as string)
    console.log('database connected');  
  } catch (err) {
    console.log('database connection error -', err);
    
  }
};

export default dbConnection
