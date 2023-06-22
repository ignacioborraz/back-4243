import Movie from "../../models/Movie.js"

async function readOne (req,res,next) {
    try {
        let { id } = req.params
        let one = await Movie.findById(id)
            .select('title price')
        return res.status(200).json({
            success:true,
            response:one
        })
    } catch (error) {
        next(error)
    }
}

export default readOne