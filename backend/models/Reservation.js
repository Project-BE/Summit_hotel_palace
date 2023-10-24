const mongoose = require('../db/conn');
const { Schema } = mongoose;

const Reservation = mongoose.model(
    'Reservation',
    new Schema({
        room:{
            type: String,
            required: true
        },
        manyPeople:{
            type: Number,
            required: true
        },
        manyDays:{
            type: Number,
            required: true
        },
        available:{
            type: Boolean
        },
        user: Object,
        reserver: Object
    },
    {timestamps: true},
    ),
);

module.exports = Reservation;