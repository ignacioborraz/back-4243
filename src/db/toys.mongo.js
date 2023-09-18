import Toy from "./models/toy.model.js"

export default class ToysModel {
    constructor() {
        this.toys = []
    }
    async createModel(data) {
        let toy = await Toy.create(data)
        return {
            response: toy._id,
            message: 'toy created!'
        }
    }
    async readModel() {
        let all = await Toy.find()
        if (all.length>0) {
            return {
                response: all,
                message: 'toys found!'
            }
        } else {
            return null
        }
    }
    async updateModel(id,data) {
        let one = await Toy.findByIdAndUpdate(id,data,{new:true})
        if (one) {
            return {
                response: one,
                message: 'toy updated!'
            }
        } else {
            return null
        }
    }
    async destroyModel(id) {
        let one = await Toy.findByIdAndDelete(id)
        if (one) {
            return {
                response: one,
                message: 'toy destroyed!'
            }
        } else {
            return null
        }
    }
}