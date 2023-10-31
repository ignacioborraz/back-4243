import { expect } from "chai"
import dao from "../../src/dao/factory.js"
const { Toy } = dao

describe(
  "Testing Toy DAO",
  ()=> {
    const model = new Toy()
    it(
      "READ ALL - DAO must respond with an object",
      async()=> {
        const response = await model.readModels()
        expect(response).to.be.a('object')
      }
    )
    it(
      "READ ALL - Response must respond with an array of objects",
      async()=> {
        const response = await model.readModels()
        expect(Array.isArray(response.response)).to.be.equals(true)
      }
    )
    it(
      "READ ONE - DAO must respond with an object",
      async()=> {
        const response = await model.readOneModel("651c4ed0670713b7775d69da")
        expect(response).to.be.a('object')
      }
    )
    it(
      "READ ONE - Reponse must respond with an object",
      async()=> {
        const response = await model.readOneModel("651c4ed0670713b7775d69da")
        expect(response.response).to.be.a('object')
      }
    )
    it(
      "READ ONE - Toy must respond with property price",
      async()=> {
        const response = await model.readOneModel("651c4ed0670713b7775d69da")
        expect(response.response).to.have.property('price')
      }
    )
    it(
      "READ ONE - Price must respond with a number",
      async()=> {
        const response = await model.readOneModel("651c4ed0670713b7775d69da")
        expect(response.response.price).to.be.a('number')
      }
    )
  }
)