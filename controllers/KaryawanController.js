const Karyawan = require('../models/Karyawan')
const Mobil = require('../models/Mobil')
const Perusahaan = require('../models/Perusahaan')

class KaryawanController{
    static async getKaryawan(req,res,next){
        try{
            const dataKaryawan = await Karyawan.find()
            .populate('mobil')
            .populate('perusahaan')
            res.status(200).json({success : true, data : dataKaryawan})
        }
        catch (e) { next({name: 'KARYAWAN_NOT_FOUND'})}
    }

    static async getKaryawanId(req, res, next){
        const { karyawanId } = req.params
        try{
            const karyawan = await Karyawan.findById(karyawanId)
            .populate('mobil')
            .populate('perusahaan')
            res.status(200).json({ success: true, data: karyawan })
        }
        catch (e) { next({ name: 'KARYAWAN_NOT_FOUND'})}
    }


    static createKaryawan(req, res, next)
    {
        const {nama, jnskelamin, tmplahir,tgllahir, alamat, telepon, perusahaan, mobil} = req.body
        const karyawan = new Karyawan({
            nama, jnskelamin, tmplahir, tgllahir, alamat, telepon, perusahaan, mobil 
        })
        karyawan.save()
        .then((karyawan) => {
            res.status(201).json({message:'Succes add karyawan', data: karyawan})
        })
        .catch(next)
    }

    static async updateKaryawan(req, res, next)
    {
        const {karyawanID} = req.params
        const {nama, jnskelamin, tmplahir,tgllahir, alamat, telepon, perusahaan, mobil } = req.body
        try{
            const newData = {nama, jnskelamin, tmplahir,tgllahir, alamat, telepon, perusahaan, mobil}
            for(let key in newData) if(!newData[key]) delete newData[key]
            const karyawan = await Karyawan.findByIdAndUpdate(karyawanID,newData,{new: true})
            res.status(200).json({success : true, data : karyawan})
        }
        catch (e) { next({name: 'KARYAWANNOTFOUND'})}
        
    }

    static async deleteKaryawan(req, res, next){
        const {karyawanID} = req.params
        try{
            const karyawan = await Karyawan.findByIdAndDelete(karyawanID)
            res.status(200).json({success : true, message : 'delete success'})
        }
        catch(e) { next({name: 'KARYAWANNOTFOUND'})}
    }






}

module.exports = KaryawanController