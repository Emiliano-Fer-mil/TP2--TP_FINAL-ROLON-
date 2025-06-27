// npm install --save-dev mocha chai supertest
// mocha y chau trabajan generalmente juntas brindan la estructura (mocha) y el expect (chai)
// supertest permite pasar las url de manera más sencilla.

/* herramientas de documentación
swagger
@use JSDoc

https://swagger.io/
https://jsdoc.app/about-getting-started

*/
import { describe } from 'mocha'
import supertest from 'supertest'
import { expect } from 'chai'

// supertest me ayuda a configurar la url donde se apuntanlas pruebas

const url = supertest("http://localhost:8080")

// describe: agrupa uin bloque de test o "bloques de prueba" relacionado a la misma entidad, mismo problema
// no es neceasaria estrcutura de funciones o clasees, suypertest tiene su propia estructura
// describe no ehecuta ningún test
describe("Test entidad producto", () => {
    // it define una prueba en particular
    it("GET", async () => {

        // const response = await url.get("/productos/").set("Authorization", token)
        const response = await url.get("/productos/")
        //console.log("Data: ", response)
        expect(response.status).to.equal(200)
        expect(response.body).to.be.a("array")
    })

    it("POST", async () => {
        const response = await url.post("/productos/").send({name:"test"})
        expect = (response.status).to.equal(200)
        expect = (response.body).to.be.a("array")
        
    })
})
