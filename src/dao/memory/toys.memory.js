//CAPA DE PERSISTENCIA (memory)
//es la encargada de realizar el CRUD

export default class Product {
  constructor() {
    this.toys = [];
  }
  init() {}
  async createModel(data) {
    //data debe venir con _id en este caso
    this.toys.push(data);
    return {
      message: "toy created!",
      response: { toy_id: data._id },
    };
  }
  readModels() {
    let all = this.toys;
    if (this.toys.length > 0) {
      return {
        message: "toys found!",
        response: { toys: all },
      };
    } else {
      return null;
    }
  }
  readOneModel(id) {
    let one = this.toys.find((each) => each._id == id);
    if (one) {
      return {
        message: "toy found!",
        response: one,
      };
    } else {
      return null;
    }
  }
  async updateModel(id, data) {
    try {
      let one = this.toys.find((each) => each._id == id);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
        return {
          message: "toy updated!",
          response: one,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async destroyModel(id) {
    try {
      let one = this.toys.find((each) => each._id == id);
      if (one) {
        this.toys = this.toys.filter((each) => each._id !== id);
        return {
          message: "toy destroyed!",
          response: one,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
