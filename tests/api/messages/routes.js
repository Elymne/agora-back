/* eslint-disable no-undef */
const app = require("../../../src/server")
const supertest = require("supertest")

const request = supertest(app)
const messageRoute = "/messages"
const message = {
    content: "Petit boule de l'est",
}
const updatedMessage = {
    content: "Gros boule de l'est",
}
let messageID
const wrongID = "3560141c-cd83-4fb2-bc00-463c2df56912"

const messagesRoutesTests = () => {
    describe("Starting client http requests for messages", () => {
        it("POST /messages", async () => {
            const res = await request.post(messageRoute).send(message)

            expect(res.status).toEqual(201)
            expect(res.body.content).toEqual(message.content)

            messageID = res.body.id
        })

        it("GET /messages", async () => {
            const res = await request.get(messageRoute)

            expect(res.status).toEqual(200)
            expect(res.body.length).toBeGreaterThan(0)
        })

        it("GET /messages/{:id}", async () => {
            const res = await request.get(`${messageRoute}/${messageID}`)

            expect(res.status).toEqual(200)

            expect(res.body.id).toEqual(messageID)
            expect(res.body.content).toEqual(message.content)
        })

        it("GET /messages check not found", async () => {
            const res = await request.get(`${messageRoute}/${wrongID}`)

            expect(res.status).toEqual(404)
        })

        it("PUT /messages", async () => {
            const res = await request.put(`${messageRoute}/${messageID}`).send(updatedMessage)

            expect(res.status).toEqual(200)

            const updatedRes = await request.get(`${messageRoute}/${messageID}`)

            expect(updatedRes.status).toEqual(200)
            expect(updatedRes.body.content).toEqual(updatedMessage.content)
        })

        it("DELETE /messages", async () => {
            const res = await request.delete(`${messageRoute}/${messageID}`)

            expect(res.status).toEqual(204)

            const deletedRes = await request.get(`${messageRoute}/${messageID}`)

            expect(deletedRes.status).toEqual(404)
        })
    })
}

module.exports = messagesRoutesTests
