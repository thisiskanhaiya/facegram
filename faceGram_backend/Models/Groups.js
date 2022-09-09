const mongoose = require('mongoose');
const AddSchema = new mongoose.Schema({
        name: String,
        category: String,
        description: String,
})

module.exports=mongoose.model('Add', AddSchema);