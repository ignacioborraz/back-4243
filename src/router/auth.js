import { Router } from "express"
import User from '../models/User.js'
import validator_register from "../middlewares/validator_register.js"
import validator_signin from "../middlewares/validator_signin.js"
import pass_is_8 from "../middlewares/pass_is_8.js"

const auth_router = Router()

//REGISTER
auth_router.post('/register',validator_register,pass_is_8,async(req,res,next)=>{
    try {
        await User.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'user created!'
        })
    } catch (error) {
        next(error)
    }
})

//SIGNIN
auth_router.post('/signin',validator_signin,pass_is_8,async(req,res,next)=>{
    try {
        const { email } = req.body
        const one = await User.findOne({ email })
        if (one) {
            req.session.email = email
            req.session.role = one.role
            return res.status(200).json({
                success: true,
                message: 'user signed in!'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'user not found!'
            })
        }
    } catch (error) {
        next(error)
    }
})

//SIGNOUT
auth_router.post('/signout',async(req,res,next)=>{
    try {
        if (req.session.email) {
            req.session.destroy()
            return res.status(200).json({
                success: true,
                message: 'user signed out!'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'user not found!'
            })
        }
    } catch (error) {
        next(error)
    }
})

export default auth_router