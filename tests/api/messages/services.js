/* eslint-disable no-undef */
const services = require("../../../src/api/messages/services")

const message = {
    content: "Petit boule de l'est",
}

const updatedMessage = {
    content: "Gros boule de l'est",
}

let idMessage

const messagesServicesTests = () => {
    describe("Unit test of message services", () => {
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
}

module.exports = messagesServicesTests
