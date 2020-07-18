/* eslint-disable no-undef */
const app = require("../../../src/server")
const supertest = require("supertest")
const request = supertest(app)

const messageRoute = "/messages"
const boxRoute = "/boxes"
const box = {
    title: "Ici jit ma grosse boite",
}
const messageBox = {
    content: "Haha, énorme",
}
const updatedBox = {
    title: "Ma grosse boite est devenu un grand garçon",
}

let boxID
let messageID
const wrongID = "3560141c-cd83-4fb2-bc00-463c2df56912"

const boxesRoutesTests = () => {
    describe("Starting client http requests for boxes", () => {
        it("POST /boxes", async () => {
            const res = await request.post(boxRoute).send(box)

            expect(res.status).toEqual(201)
            expect(res.body.title).toEqual(box.title)

            boxID = res.body.id
        })

        it("GET /boxes", async () => {
            const res = await request.get(boxRoute)

            expect(res.status).toEqual(200)
            expect(res.body.length).toBeGreaterThan(0)
        })

        it("GET /boxes/{:id}", async () => {
            const res = await request.get(`${boxRoute}/${boxID}`)

            expect(res.status).toEqual(200)

            expect(res.body.id).toEqual(boxID)
            expect(res.body.title).toEqual(box.title)
        })

        it("GET /boxes/{:id} (http:404)", async () => {
            const res = await request.get(`${boxRoute}/${wrongID}`)

            expect(res.status).toEqual(404)
        })

        it("PUT /boxes", async () => {
            const res = await request.put(`${boxRoute}/${boxID}`).send(updatedBox)

            expect(res.status).toEqual(200)

            const updatedRes = await request.get(`${boxRoute}/${boxID}`)

            expect(updatedRes.status).toEqual(200)
            expect(updatedRes.body.title).toEqual(updatedBox.title)
        })

        it("POST /boxes/{:id}/mesages", async () => {
            const res = await request.post(`${boxRoute}/${boxID}${messageRoute}`).send(messageBox)
            messageID = res.body.id

            expect(res.status).toEqual(201)

            const messageAddedRes = await request.get(`${messageRoute}/${messageID}`)
            expect(messageAddedRes.body.content).toEqual(messageBox.content)
        })

        it("DELETE /boxes/{:id}", async () => {
            const res = await request.delete(`${boxRoute}/${boxID}`)

            expect(res.status).toEqual(204)

            const deletedRes = await request.get(`${boxRoute}/${boxID}`)

            expect(deletedRes.status).toEqual(404)
        })
    })
}

module.exports = boxesRoutesTests
