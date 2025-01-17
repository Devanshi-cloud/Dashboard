const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    period:
    [
        {
            start: {
                type: Date,
                required: false
            },
            end: {
                type: Date,
                required: false
            }
        }
    ],
    sleepDuration:{
        type: Array,
        required: true
},
    waterIntake:{
        type: Array,
        required: true
    },
    meditationDuration:{
        type: Array,
        // required: true
    },     
    pssScore:{
        type: Array,
        // required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;