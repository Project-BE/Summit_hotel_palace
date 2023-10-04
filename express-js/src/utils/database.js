import mongoose from 'mongoose';

const uri = ''

const databaseConnection = async () => {
    if(!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(uri)
    }
}
