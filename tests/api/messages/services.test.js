/* eslint-disable no-undef */
const db = require("../../../src/configurations/db")
const services = require("./../../../src/api/messages/services")

const message = {
    content: "Petit boule de l'est",
}

const updatedMessage = {
    content: "Gros boule de l'est",
}

let idMessage

describe("Unit test of message services", () => {
    beforeAll(async () => {
        await db.sync()
    })

    afterAll(() => {
        db.close()
    })

    it("create one", async () => {
        await services.create(message).then((data) => {
            expect(data.content).toEqual(message.content)
            idMessage = data.id
        })
    })

    it("get one", async () => {
        await services.getOneById(idMessage).then((data) => {
            expect(data.content).toEqual(message.content)
        })
    })

    it("get all (1)", async () => {
        await services.getAll().then((data) => {
            expect(data.length).toEqual(1)
        })
    })

    it("update one (1)", async () => {
        await services.update(idMessage, updatedMessage).then((data) => {
            expect(data).toEqual([1])
        })
    })

    it("update one (2)", async () => {
        await services.getOneById(idMessage).then((data) => {
            expect(data.content).toEqual(updatedMessage.content)
        })
    })

    it("delete one", async () => {
        await services.destroy(idMessage).then((data) => {
            expect(data).toEqual(1)
        })
    })

    it("get all (2)", async () => {
        await services.getAll().then((data) => {
            expect(data.length).toEqual(0)
        })
    })
})
