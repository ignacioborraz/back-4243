import { connect } from "mongoose";

export default class MongoConnect {
  constructor(link) {
    this.link = link;
  }
  async connect_db() {
    try {
      await connect(this.link);
      console.log("database: connected");
    } catch (error) {
      console.log(error);
    }
  }
  single() {
    if (typeof MongoConnect.instance === "object") {
      console.log("error connection: you already connected to another db");
      return MongoConnect.instance;
    } else {
      MongoConnect.instance = this;
      console.log("new connection");
      return this;
    }
  }
}
