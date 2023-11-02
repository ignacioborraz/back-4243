import args from "../../src/config/arguments.js"
import { expect } from "chai"
import supertest from "supertest"

const requester = supertest(`http://localhost:${args.p}/api`)

describe("Testeando Juguetería", ()=> {
  describe("Testeando flujo", ()=> {
    let idToUse = null
    let cookie = null
/*     it("Debe registrar un usuario", async()=> {
      let data = { name: "name test", url_photo: "url_photo test", mail: "test@coder.com", password: "test" }
      const response = await requester.post("/auth/register").send(data)
      const { _body,statusCode } = response
      idToUse = _body.response
      expect(statusCode).to.be.equals(201)
    }) */
    it("Debe iniciar sesión un usuario", async()=> {
      let data = { mail: "test@coder.com", password: "test" }
      const response = await requester.post("/auth/login").send(data)
      const { headers } = response
      //console.log(headers);
      cookie = headers["set-cookie"][0]
      cookie = {
        name: cookie.split("=")[0],
        value: cookie.split("=")[1]
      }
      expect(cookie.name).to.be.equals("token")
      expect(cookie.value).to.be.ok
    })
    it("Debe crear un juguete", async()=> {
      let data = { title: "title test", description: "description test", stock: 100, url_photo: "photo test", price: 10 }
      const response = await requester.post("/toys").send(data).set("Cookie",[cookie.name+"="+cookie.value])
      const { _body } = response
      idToUse = _body.response
      expect(_body.message).to.be.equals("toy created!")
    })
  })
})