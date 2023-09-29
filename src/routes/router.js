import { Router } from "express";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default class MyRouter {
  constructor() {
    this.router = Router();
    this.init();
  }
  getRouter() {
    return this.router;
  }
  init() {}
  applyCb(cbs) {
    return cbs.map((cb) => async (...params) => {
      try {
        await cb.apply(this, params);
      } catch (error) {
        params[1].status(500).send(error);
      }
    });
  }
  responses = (req, res, next) => {
    res.sendSuccessCreate = (payload) => res.status(201).json(payload);
    res.sendSuccess = (payload) => res.status(200).json(payload);
    res.sendNotFound = (payload) =>
      CustomError.newError(errors.notFound(payload));
    return next();
  };
  //create
  create(path, ...cbs) {
    this.router.post(path, this.applyCb(cbs));
  }
  //read
  read(path, ...cbs) {
    this.router.get(path, this.applyCb(cbs));
  }
  //update
  update(path, ...cbs) {
    this.router.put(path, this.applyCb(cbs));
  }
  //destroy
  destroy(path, ...cbs) {
    this.router.delete(path, this.applyCb(cbs));
  }
  //use
  use(path, ...cbs) {
    this.router.use(path, this.responses, this.applyCb(cbs));
  }
}
