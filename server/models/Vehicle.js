const { Schema } = require('mongoose');

const userSchema = require('./User');

const vehicleSchema = new Schema({
    year: {
        type: Number,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    VIN: {
        type: Number,
    },
    owners: [userSchema],
    odometer: {
        type: Number,
    },
    notes: {
        type: String,
    },
});

module.exports = vehicleSchema;