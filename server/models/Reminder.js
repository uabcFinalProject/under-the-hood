const { Schema, model } = require('mongoose');

//Using the ref to connect the reminder to the user and the vehicle
const reminderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    maintenanceItem: {
        type: Schema.Types.ObjectId,
        ref: 'Maintenance',
    },
    date: {
        type: Date,
    }
});

module.exports = reminderSchema;

//questions: we are hoping to figure out how to construct our reminder schema, we want it to have the user, desired maintenance item, as well as the date of the reminders itself