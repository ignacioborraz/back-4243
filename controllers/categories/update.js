import Category from "../../models/Category.js"

const controller = {

    update: async(req,res,next)=> {
        try {
            let { id } = req.params
            let upd = await Category.updateOne(
                { _id: id }, //objeto de busqueda
                req.body //objeto con las propiedades a modificar
            )
            console.log(upd)
            return res.status(200).send('updated')
        } catch(error) {
            next(error)
        }
    },

    upd: async(req,res,next) => {
        try {
            let { id } = req.params
            let upd = await Category.findOneAndUpdate(
                { _id: id },
                //con findByIdAndUpdate tengo que pasar directo el id
                req.body,
                { new: true }
            )
            return res.status(200).send(upd)
        } catch(error) {
            next(error)
        }
    }

}

export default controller