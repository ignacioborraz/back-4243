//CAPA DE SERVICIOS
//brindar servicios segun la persistencia
//HOY DIA ES UN INTERMEDIARIO (entre persistencia y control)
import ToyMongo from "../db/mongo/toys.mongo.js";

export default class ToysService {
  constructor() {
    //tiene que construir una instancia del modelo a la cual le tiene que configurar los diferentes servicios para CRUD
    this.model = new ToyMongo();
  }
  createService(data) {
    let response = this.model.createModel(data);
    return response;
  }
  readService() {
    let response = this.model.readModels();
    return response;
  }
  readOneService(id) {
    let response = this.model.readOneModel(id);
    return response;
  }
  updateService(id, data) {
    let response = this.model.updateModel(id, data);
    return response;
  }
  destroyService(id) {
    let response = this.model.destroyModel(id);
    return response;
  }
}
