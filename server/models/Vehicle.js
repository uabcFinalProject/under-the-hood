const { Schema } = require('mongoose');

const vehicleSchema = new Schema({
    year: {
        type: Int,
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
        type: Int,
    },
    owners: [userSchema],
    odometer: {
        type: Int,
    },
    notes: {
        type: String,
    },
});

module.exports = vehicleSchema;