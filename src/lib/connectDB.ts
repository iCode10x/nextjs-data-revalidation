import mongoose from "mongoose";
const connectString =
  "mongodb+srv://icode10x:icodekadatabase@cluster0.rejhzrf.mongodb.net/todosdb?retryWrites=true&w=majority";

export const connectToDB = async () => {
  await mongoose.connect(connectString);
  console.log("Database connected");
};
