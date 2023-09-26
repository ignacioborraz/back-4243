//CAPA DE SERVICIOS
//brindar servicios segun la persistencia
//HOY DIA ES UN INTERMEDIARIO (entre persistencia y control)
import CartMongo from "../dao/mongo/carts.mongo.js"

export default class CartsService {
  constructor() {
    this.model = new CartMongo();
  }
  createService(data) {
    let response = this.model.createModel(data);
    return response;
  }
  filterService(user_id, state) {
    let response = this.model.filterModels(user_id, state);
    return response;
  }
  updateService(id,data) {
    let response = this.model.updateModel(id,data);
    return response;
  }
  destroyService(id) {
    let response = this.model.destroyModel(id);
    return response;
  }
}
