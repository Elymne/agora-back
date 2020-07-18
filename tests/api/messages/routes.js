/* eslint-disable no-undef */
const app = require("../../../src/server")
const supertest = require("supertest")
const request = supertest(app)

const messageRoute = "/messages"
const message = {
    content: "Petit boule de l'est",
}
const wrongMessage = {
    contanteu: "Et ça ce soir, ça va se savoir !",
    id_box: 1,
}
const updatedMessage = {
    content: "Gros boule de l'est",
}
let messageID
const wrongID = "3560141c-cd83-4fb2-bc00-463c2df56"

const messagesRoutesTests = () => {
    describe("Starting client http requests for messages", () => {
        it("POST /messages", async () => {
            const res = await request.post(messageRoute).send(message)
            expect(res.status).toEqual(201)
            expect(res.body.content).toEqual(message.content)
            messageID = res.body.id
        })

        it("POST /messages (http:500)", async () => {
            const res = await request.post(messageRoute).send(wrongMessage)
            expect(res.status).toEqual(500)
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

        it("GET /messages/{:id} (http:404) ", async () => {
            const res = await request.get(`${messageRoute}/${wrongID}`)
            expect(res.status).toEqual(404)
        })

        it("PUT /messages/{:id}", async () => {
            const res = await request.put(`${messageRoute}/${messageID}`).send(updatedMessage)
            expect(res.status).toEqual(200)
            const updatedRes = await request.get(`${messageRoute}/${messageID}`)
            expect(updatedRes.status).toEqual(200)
            expect(updatedRes.body.content).toEqual(updatedMessage.content)
        })

        it("PUT /messages/{:id} (http:500)", async () => {
            const res = await request.put(`${messageRoute}/${messageID}`).send(wrongMessage)
            expect(res.status).toEqual(500)
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
