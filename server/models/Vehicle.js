const { Schema, model } = require('mongoose');

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
    /* 
    A VIN is usually composed of: 17 characters including digits and capital letters, that acts as a unique identifier for your car. The VIN number tells you when and where the car was built. It tells you the manufacturer, year, make and model, and the trim level including unique features and specifications.
    */
    vin: {
        type: String,
        unique: true,
        minLength: 17,
        maxLength: 17,
        uppercase: true,
    },
    odometer: {
        type: Number,
    },
    notes: {
        type: String,
    },
    reminders: {
        type: Schema.Types.ObjectId,
        ref: 'Reminder',
    },
    serviceHistory: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceHistory'
    }
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;