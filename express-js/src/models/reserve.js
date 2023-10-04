import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{},
    commercialPhone:{},
    personalPhone:{},
    checkIn:{},
    checkOut:{},
    entryTime:{},
    room:{},
    observation:{}

})

export default mongoose.models.Reserve || mongoose.models('Reserve', UserSchema)