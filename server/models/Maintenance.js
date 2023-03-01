const { Schema } = require('mongoose');

const maintenanceSchema = new Schema({
    maintenanceItem: {
        type: String,
    },
});

module.exports = maintenanceSchema;