import mongoose from 'mongoose';

const uri = 'mongodb+srv://summithotelpalace11:RdExEDwKCxtvaUwt@reservation.m5hbzkg.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if(!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(uri)
    }
}