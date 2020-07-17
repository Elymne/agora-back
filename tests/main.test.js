/* eslint-disable no-undef */
const db = require("./../src/configurations/db")

const { boxesRoutesTests, boxesServicesTests } = require("./api/boxes")
const { messagesRoutesTests, messagesServicesTests } = require("./api/messages")

describe("Run tests", () => {
    beforeAll(async () => {
        await db.sync()
    })

    boxesRoutesTests()
    boxesServicesTests()
    messagesRoutesTests()
    messagesServicesTests()

    afterAll(() => {
        db.close()
    })
})
