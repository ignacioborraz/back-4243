import ToysModel from "../db/toys.mongo.js";

export default class ToysService {
    constructor() {
        this.model = new ToysModel()
    }
    createService(data) {
        return this.model.createModel(data)
    }
    readService() {
        return this.model.readModel()
    }
    updateService(id,data) {
        return this.model.updateModel(id,data)
    }
    destroyService(id) {
        return this.model.destroyModel(id)
    }
}