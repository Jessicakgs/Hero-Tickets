import mongoose from "mongoose"

export async function connect(){
    try{
        await mongoose.connect('mongodb+srv://jessica:morango10@cluster0.ljznsrd.mongodb.net/hero-tickets');
        console.log('Database successfully connected!')
    }catch(error) {
        console.log("🚀 ~ file: database.ts:5 ~ connect ~ error:", error)
    }
}