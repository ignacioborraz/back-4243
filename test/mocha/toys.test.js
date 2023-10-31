import assert from "assert"
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
        assert.strictEqual(typeof response, 'object')
      }
    )
    it(
      "READ ALL - Response must respond with an array of objects",
      async()=> {
        const response = await model.readModels()
        assert.strictEqual(Array.isArray(response.response), true)
      }
    )
    it(
      "READ ONE - DAO must respond with an object",
      async()=> {
        const response = await model.readOneModel("651c4ed0670713b7775d69da")
        assert.strictEqual(typeof response, 'object')
      }
    )
    it(
      "READ ONE - Reponse must respond with an object",
      async()=> {
        const response = await model.readOneModel("651c4ed0670713b7775d69da")
        assert.strictEqual(typeof response.response, 'object')
      }
    )
    it(
      "READ ONE - Toy must respond with property price",
      async()=> {
        const response = await model.readOneModel("651c4ed0670713b7775d69da")
        assert.ok(response.response.price)
      }
    )
    it(
      "READ ONE - Price must respond with a number",
      async()=> {
        const response = await model.readOneModel("651c4ed0670713b7775d69da")
        assert.strictEqual(typeof response.response.price, 'number')
      }
    )
  }
)