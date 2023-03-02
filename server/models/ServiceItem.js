const { Schema, model } = require('mongoose');

const serviceItemSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    moreInfoLink: {
        type: String,
    }
});

const ServiceItem = model("ServiceItem", serviceItemSchema);

module.exports = ServiceItem;