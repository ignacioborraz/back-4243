import Category from "../../models/Category.js"

const controller = {

    all: async (req,res,next) => {
        try {
            let all = await Category.find()
            return res
                .status(200)
                .json({ categories: all })
        } catch(err) {
            next(err)
        }
    }

}

export default controller