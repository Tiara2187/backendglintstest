const mongoose = require('mongoose')

const karyawanSchema = new mongoose.Schema({
    mobil : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mobil'
    },
    perusahaan : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Perusahaan'
    },
    nama : {
        type: String,
        require: true
    },
    jnskelamin : {
        type : String,
        require: true
    },
    tmplahir : {
        type : String,
        require:true
    },
    tgllahir : {
        type: Date,
        require: true
    },
    alamat : {
        type: String,
        require: true
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

    module.exports = mongoose.model('Karyawan',karyawanSchema)