import Category from "../../models/Category.js"

const controller = {

    destroy: async(req,res,next) => {
        try {
            let { id } = req.params
            let dst = await Category.deleteOne({ _id: id })
            console.log(dst)
            return res.status(200).send(dst)
        } catch(error) {
            next(error)
        }
    },

    dts: async(req,res,next) => {
        try {
            let { id } = req.params
            let dst = await Category.findOneAndDelete({ _id: id })
            if (dst) {
                return res.status(200).send(dst)
            }
            return res.status(404).send('document don`t found')
        } catch(error) {
            next(error)
        }
    }

}

export default controller