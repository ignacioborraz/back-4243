//CAPA DE SERVICIOS
//brindar servicios segun la persistencia

import AuthMongo from "../db/mongo/users.mongo.js";

export default class AuthService {
  constructor() {
    //tiene que construir una instancia del modelo a la cual le tiene que configurar los diferentes servicios para CRUD
    this.model = new AuthMongo();
  }
  register(data) {
    let response = this.model.register(data);
    return response;
  }
  login(user,token) {
    let response = this.model.login(user,token);
    return response;
  }
  signout() {
    let response = this.model.signout();
    return response;
  }
  read() {
    let response = this.model.read();
    return response;
  }
  readOne(mail) {
    let response = this.model.readOne(mail);
    return response;
  }
  update(mail, data) {
    let response = this.model.update(mail, data);
    return response;
  }
  destroy(mail) {
    let response = this.model.destroy(mail);
    return response;
  }
}
