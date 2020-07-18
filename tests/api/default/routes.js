const app = require("../../../src/server")
const supertest = require("supertest")
const request = supertest(app)

const defaultMessage = "Message service is running !"
const errorMessage = "not found"
const bananaMessage = "B" + "a" + +"a"
const wrongRoute = "/wrong-route"

/* eslint-disable no-undef */
const defaultRoutesTests = () => {
    describe("Starting client http requests for default", () => {
        it("GET /", async () => {
            const res = await request.get("/")
            expect(res.body.message).toEqual(defaultMessage)
        })

        it("ALL /*", async () => {
            const res = await request.get(wrongRoute)
            expect(res.status).toEqual(404)
            expect(res.body.error).toEqual(errorMessage)
        })

        it("GET /banana", async () => {
            const res = await request.get("/banana")
            expect(res.body.message).toEqual(bananaMessage)
        })
    })
}

module.exports = defaultRoutesTests
