import Category from "../../models/Category.js"

const controller = {

    create: async (req,res) => {
        try {
            let category = await Category.create(req.body)
            return res.status(201).json({ /* json me deja enviar jsons al cliente */
                success: true,
                category: category,
                id: category._id
            })
        } catch(error) {
            console.log(error)
            return res.status(400).json({
                success: false,
                message: 'no se pudo crear'
            })
        }        
    }
    
}

export default controller