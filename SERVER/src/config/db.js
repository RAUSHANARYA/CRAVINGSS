import mongoose from "mongoose";

const connectDB = async()=>
{
   try{
      const conn = await mongoose.connect(process.env.MONGO_DB_URI);
      console.log("Mongo Db connected successfully")
      console.log("DB Host",conn.connection.host);
      console.log("DB Host",conn.connection.name);
   }
   catch(error)
   {
     console.log(error.message)
     process.exit(1);
   }
};

export default connectDB;