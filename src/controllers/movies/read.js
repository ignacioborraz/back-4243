import Movie from "../../models/Movie.js";

async function read (req,res,next) {
    try {
        let queries = {}
        if (req.query.title) {
            queries.title = new RegExp(req.query.title,'i')
        }
        let all = await Movie.find(queries,'title')
        return res.status(200).json({
            success:true,
            response:all
        })
    } catch (error) {
        next(next)
    }
}

export default read