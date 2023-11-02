import args from "../../src/config/arguments.js"
import { expect } from "chai"
import supertest from "supertest"

const requester = supertest(`http://localhost:${args.p}/api`)

describe("Testeando Juguetería", ()=> {
  describe("Testeando Juguetes", ()=> {
    let idToUse = null
    it("Debe crear un juguete", async()=> {
      let data = { title: "title test", description: "description test", stock: 100, url_photo: "photo test", price: 10 }
      const response = await requester.post("/toys").send(data)
      const { _body } = response
      idToUse = _body.response
      expect(_body.message).to.be.equals("toy created!")
    })
    it("Debe leer juguetes", async()=> {
      const response = await requester.get("/toys")
      const { _body } = response
      expect(Array.isArray(_body.response)).to.be.equals(true)
    })
    it("Debe actualizar un juguete", async()=> {
      let data = { title: "title updated" }
      const response = await requester.put("/toys/"+idToUse).send(data)
      const { _body } = response
      expect(_body.message).to.be.equals("toy updated!")
    })
    it("Debe eliminar un juguete", async()=> {
      const response = await requester.delete("/toys/"+idToUse)
      const { _body } = response
      expect(_body.message).to.be.equals("toy destroyed!")
    })
  }
  )
})