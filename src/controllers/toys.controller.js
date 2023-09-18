import ToysService from "../services/toys.service.js";

export default class ToysController {
    constructor() {
        this.service = new ToysService()
    }
    createController(data) {
        return this.service.createService(data)
    }
    readController() {
        return this.service.readService()
    }
    updateController(id,data) {
        return this.service.updateService(id,data)
    }
    destroyController(id) {
        return this.service.destroyService(id)
    }
}