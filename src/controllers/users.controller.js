//CAPA CONTROLADORA
//es la encargada de dirigirme hacia el servicio que corresponda
import AuthService from "../services/users.service.js";

export default class AuthController {
  constructor() {
    //tiene que construir una instancia de los servicios del modelo
    this.service = new AuthService();
  }
  register(data) {
    let response = this.service.register(data);
    return response;
  }
  login(user) {
    let response = this.service.login(user);
    return response;
  }
  signout() {
    let response = this.service.signout();
    return response;
  }
  read() {
    let response = this.service.read();
    return response;
  }
  readOne(mail) {
    let response = this.service.readOne(mail);
    return response;
  }
  update(mail, data) {
    let response = this.service.update(mail, data);
    return response;
  }
  destroy(mail) {
    let response = this.service.destroy(mail);
    return response;
  }
}
