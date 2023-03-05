import Category from "../../models/Category"

const controller = {

    countDocs: async (req,res) => {
        let count = await Category.estimatedDocumentCount()
        return res
            .status(200)
            .send(count)
    }

}

export default controller