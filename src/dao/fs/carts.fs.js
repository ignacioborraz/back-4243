//CAPA DE PERSISTENCIA (fs)
//es la encargada de realizar el CRUD

import fs from "fs";
import Toy from "./toys.fs.js"
const toys = new Toy()
//import User from "./users.fs.js"

export default class Cart {
  constructor() {
    this.carts = [];
    this.path = "./src/dao/fs/files/carts.json";
    this.init();
  }
  init() {
    let file = fs.existsSync(this.path);
    if (!file) {
      fs.writeFileSync(this.path, "[]");
    } else {
      this.carts = JSON.parse(fs.readFileSync(this.path, "UTF-8"));
    }
    return true;
  }
  async createModel(data) {
    //data debe venir con _id en este caso
    console.log(data);
    this.carts.push(data);
    console.log(this.carts);
    let data_json = JSON.stringify(this.carts, null, 2);
    await fs.promises.writeFile(this.path, data_json);
    return {
      message: "product added!",
      response: { store_id: data._id },
    };
  }
  filterModels(user_id, state) {
    let all = this.carts.filter((each) => each.user_id == user_id && each.state == state);
    if (all.length > 0) {
      all = all.map(each=>each.toy_id = toys.readOneModel(each.toy_id))
      return {
        message: "products found!",
        response: { products: all },
      };
    } else {
      return null;
    }
  }
  async updateModel(id, data) {
    try {
      let one = this.carts.find((each) => each._id == id);
      if (one) {
        one.toy_id = toys.readOneModel(one.toy_id)
        for (let prop in data) {
          one[prop] = data[prop];
        }
        let data_json = JSON.stringify(this.carts, null, 2);
        await fs.promises.writeFile(this.path, data_json);
        return {
          message: "product updated!",
          response: { product: one },
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
      let one = this.carts.find((each) => each._id == id);
      if (one) {
        this.carts = this.carts.filter((each) => each._id !== id);
        let data_json = JSON.stringify(this.carts, null, 2);
        await fs.promises.writeFile(this.path, data_json);
        return {
          message: "product removed!",
          response: { product: one },
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
