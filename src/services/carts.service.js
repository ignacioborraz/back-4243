import CartsRepository from "../repositories/carts.rep.js";

export default class CartsService {
  constructor() {
    this.repository = new CartsRepository();
  }
  createService(data) {
    let response = this.repository.createRepository(data);
    return response;
  }
  filterService(user_id, state) {
    let response = this.repository.filterRepositories(user_id, state);
    return response;
  }
  updateService(id,data) {
    let response = this.repository.updateRepository(id,data);
    return response;
  }
  destroyService(id) {
    let response = this.repository.destroyRepository(id);
    return response;
  }
}
