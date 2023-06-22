import User from '../../models/User.js'

export default async function (req,res,next) {
    try {
        await User.create(req.user)
        return res.status(201).json({
            success:true,
            message:'created'
        })
    } catch (error) {
        next(error)
    }
}