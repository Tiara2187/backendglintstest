const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const mobilSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    merk: {
        type: String,
        required: true
    },
    harga : {
        type : Number,
        required: true
    }  
},
{
    timestamps: true
})

module.exports = mongoose.model('Mobil',mobilSchema)
