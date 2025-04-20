import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ericyuifan:eric6221@cluster0.6a7fxzm.mongodb.net/Food_Delivery').then(()=>console.log('DB Connected'));
}