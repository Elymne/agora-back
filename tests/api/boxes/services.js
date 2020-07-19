/* eslint-disable no-undef */
const services = require("../../../src/api/boxes/services")
const messageServices = require("../../../src/api/messages/services")

const box = {
    title: "Ici jit ma grosse boite",
}

const messageBox = {
    content: "Haha, énorme",
}

const updatedBox = {
    title: "Ma grosse boite est devenu un grand garçon",
}

let idBox
let idMessage

const boxesServicesTests = () => {
    describe("Unit test of box services", () => {
        it("create one", async () => {
            await services.create(box).then((data) => {
                expect(data.title).toEqual(box.title)
                idBox = data.id
            })
        })

        it("get one", async () => {
            await services.getOneByID(idBox).then((data) => {
                expect(data.title).toEqual(box.title)
            })
        })

        it("get all (1)", async () => {
            await services.getAll().then((data) => {
                expect(data.length).toEqual(1)
            })
        })

        it("update one (1)", async () => {
            await services.update(idBox, updatedBox).then((data) => {
                expect(data).toEqual([1])
            })
        })

        it("update one (2)", async () => {
            await services.getOneByID(idBox).then((data) => {
                expect(data.title).toEqual(updatedBox.title)
            })
        })

        it("add message (1)", async () => {
            await services.addMessage(idBox, messageBox).then((data) => {
                expect(data.content).toEqual(messageBox.content)
                idMessage = data.id
            })
        })

        it("add message (2)", async () => {
            await services.getOneByID(idBox).then((data) => {
                expect(data.messages.length).toEqual(1)
            })
        })

        it("delete one (1)", async () => {
            await services.destroy(idBox).then((data) => {
                expect(data).toEqual(1)
            })
        })

        it("delete one (2)", async () => {
            await messageServices.getOneByID(idMessage).then((data) => {
                expect(data).toEqual(null)
            })
        })

        it("get all (2)", async () => {
            await services.getAll().then((data) => {
                expect(data.length).toEqual(0)
            })
        })
    })
}

module.exports = boxesServicesTests
