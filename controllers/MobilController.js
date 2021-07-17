const Mobil = require('../models/Mobil')

class MobilController{

    static async getMobil(req,res,next) {
        try{
            const mobil = await Mobil.find()
            res.status(200).json({success : true, data : mobil})
        }

        catch (any) { next({name: 'NOT_FOUND ' })}
    }

    static async getMobilId(req, res, next) {
        const {mobilID} = req.params
        try{
            const mobil = await Mobil.findById(mobilID)
            res.status(200).json({success : true, data : mobil})
        }
        catch (any) { next({name: 'NOT_FOUND'})}
    }

    static async createMobil(req, res, next){
        const {nama, merk, harga} = req.body
        const mobilData = await Mobil.findOne({
            nama: nama,
            merk: merk,
            harga: harga
        })
        console.log(mobilData);

        if(mobilData) { next({name: 'MOBILEXIST'}) }
        else{
            const mobil = new Mobil({
                nama, merk, harga
            });

            mobil.save()
            .then(data => {
                res.status(200).json({success : true, data})
            })
            .catch(err => {next({name : 'VALID'})})
        }
    }

    static async updateMobil(req, res, next){
        const {mobilID} = req.params
        const { nama, merk, harga } = req.body
        try{
            const newData = {nama, merk, harga}
            for(let key in newData) if(!newData[key]) delete newData[key]
            const mobil = await Mobil.findByIdAndUpdate(mobilID,newData,{new: true})
            res.status(200).json({success : true, data : mobil})
        }
        catch (e) { next({name: 'MOBILNOTFOUND'})}
    }

    static async deleteMobil(req, res, next){
        const {mobilID} = req.params
        try{
            const mobil = await Mobil.findByIdAndDelete(mobilID)
            res.status(200).json({success : true, message : 'delete success'})
        }
        catch(e) { next({name: 'MOBILNOTFOUND'})}
    }



}

module.exports = MobilController