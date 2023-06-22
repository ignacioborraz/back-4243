import Movie from "../../models/Movie.js";

async function read (req,res,next) {
    try {
        let queries = {}
        let pagination = { page:1,limit:5 }
        if (req.query.page) {
            pagination.page = req.query.page
        }
        if (req.query.limit) {
            pagination.limit = req.query.limit
        }
        if (req.query.title) {
            queries.title = new RegExp(req.query.title,'i')
        }
        let all = await Movie
            .find(queries)
            //.populate('producer','name')
            .populate({
                path: 'producer',
                select: 'name -_id'
            })
            .sort({ title:'desc' })
            .skip( pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0 )
            .limit( pagination.limit > 0 ? pagination.limit : 0 )
        let count_total = await Movie.estimatedDocumentCount()
        let count = await Movie.countDocuments(queries)
        return res.status(200).json({
            success:true,
            response:all,
            count_total,
            count
        })
    } catch (error) {
        next(next)
    }
}

export default read