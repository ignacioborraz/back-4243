import Category from "../../models/Category.js"

const controller = {

    all: async (req,res,next) => {
        console.log(req.query)
        let consultas = {}
        let pagination = {
            page: 1,
            limit: 3
        }
        if (req.query.admin_id) {
            consultas.admin_id = req.query.admin_id
        }
        if (req.query.name) {
            consultas.name = new RegExp(req.query.name,'i')
        }
        if (req.query.page) {
            pagination.page = req.query.page
        }
        if (req.query.quantity) {
            pagination.limit = req.query.quantity
        }
        try {
            let all = await Category.find(consultas)
                .select('name admin_id -_id')
                .sort({ admin_id: 1, name: -1 })
                .skip( pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0 )
                .limit( pagination.limit > 0 ? pagination.limit : 0 )
                //.populate('admin_id','mail -_id')
                .populate({
                    path: 'admin_id',
                    select: 'mail -_id',
/*                     populate: {
                        path: '',
                        select: '',
                        populate: {
                            path: '',
                            select: ''
                        } //se puede popular la cantidad de veces que requieran
                    } */
                })
            let count = await Category.estimatedDocumentCount()
            let queryCount = await Category.countDocuments({ name: /te/i })
            return res
                .status(200)
                .json({ categories: all, count, queryCount })
        } catch(err) {
            next(err)
        }
    }

}

export default controller