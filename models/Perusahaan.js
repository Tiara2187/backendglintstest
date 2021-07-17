const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const perusahaanSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    telepon : {
        type : String,
        unique:true,
        required: true,
        maxlength: 20
    }  
},
{
    timestamps: true
})

module.exports = mongoose.model('Perusahaan',perusahaanSchema)
