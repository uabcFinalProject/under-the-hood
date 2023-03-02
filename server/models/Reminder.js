const { Schema, model } = require('mongoose');

//Using the ref to connect the reminder to the user and the vehicle
const reminderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    serviceType: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceItem',
        required: true
    },
    notifyStartDate: {
        type: Date,
        required: true,
        default: new Date
    },
    notifyFrequency: {
        // 0 = Once, 
        // >=1 is number of days between
        type: Number,
        required: true,
        default: 0
    }
});

const Reminder = model("Reminder", reminderSchema);

module.exports = Reminder;

//questions: we are hoping to figure out how to construct our reminder schema, we want it to have the user, desired maintenance item, as well as the date of the reminders itself