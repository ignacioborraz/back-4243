//CAPA CONTROLADORA
//es la encargada de dirigirme hacia el servicio que corresponda
import CartsService from "../services/carts.service.js";

export default class CartsController {
  constructor() {
    this.service = new CartsService();
  }
  createController(data) {
    let response = this.service.createService(data);
    return response;
  }
  filterController(user_id, state) {
    let response = this.service.filterService(user_id, state);
    return response;
  }
  updateController(id,data) {
    let response = this.service.updateService(id,data);
    return response;
  }
  destroyController(id) {
    let response = this.service.destroyService(id);
    return response;
  }
}
