const Perusahaan = require('../models/Perusahaan')

class PerusahaanController {

    static async getPerusahaan(req,res,next) {
        try{
            const perusahaan = await Perusahaan.find()
            res.status(200).json({success : true, data : perusahaan})
        }

        catch (any) { next({name: 'NOT_FOUND' })}
    }

    static async getPerusahaanId(req, res, next) {
        const {perusahaanID} = req.params
        try{
            const perusahaan = await Perusahaan.findById(perusahaanID)
            res.status(200).json({success : true, data : perusahaan })
        }
        catch (any) { next({name: 'NOT_FOUND'})}
    }

    static async createPerusahaan(req, res, next){
        const {nama, alamat, telepon} = req.body
        const perusahaanData = await Perusahaan.findOne({
            nama : nama,
            alamat : alamat,
            telepon: telepon

        })
        console.log(perusahaanData)

        if(perusahaanData) { next({name: 'PEUSAHAANEXIST'}) }
        else{
            const perusahaan = new Perusahaan({
                nama, alamat, telepon
            });

            perusahaan.save()
            .then(data => {
                res.status(200).json({success : true, data})
            })
            .catch(err => {next({name : 'VALID'})})
        }
    }

    static async updatePerusahaan(req, res, next){
        const {perusahaanID} = req.params
        const { nama, alamat, telepon } = req.body
        try{
            const newData = {nama, alamat, telepon}
            for(let key in newData) if(!newData[key]) delete newData[key]
            const perusahaan = await Perusahaan.findByIdAndUpdate(perusahaanID,newData,{new: true})
            res.status(200).json({success : true, data : perusahaan})
        }
        catch (e) { next({name: 'PERUSAHAANNOTFOUND'})}
    }

    static async deletePerusahaan(req, res, next){
        const {perusahaanID} = req.params
        try{
            const perusahaan = await Perusahaan.findByIdAndDelete(perusahaanID)
            res.status(200).json({success : true, message : 'delete success'})
        }
        catch(e) { next({name: 'PERUSAHAANNOTFOUND'})}
    }


}

module.exports = PerusahaanController