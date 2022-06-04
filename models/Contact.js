const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    phone: {
        type: String,
    }
})

module.exports = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)