const { Schema, model } = require('mongoose');

//Using the ref to connect the reminder to the user and the vehicle
const serviceHistorySchema = new Schema({
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    serviceItem: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceItem',
        required: true
    },
    serviceDate: {
        type: Date,
        required: true,
        default: new Date
    },
    serviceProvider: {
        type: String,
    }
});

const ServiceHistory = model("ServiceHistory", serviceHistorySchema);

module.exports = ServiceHistory;