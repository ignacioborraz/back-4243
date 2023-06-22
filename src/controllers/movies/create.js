import Movie from '../../models/Movie.js'

export default async function (req,res,next) {
    try {
        await Movie.create(req.body)
        return res.status(201).json({
            success:true,
            message:'created'
        })
    } catch (error) {
        next(error)
    }
}