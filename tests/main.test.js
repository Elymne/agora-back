/* eslint-disable no-undef */
const db = require("./../src/configurations/db")

const { boxesRoutesTests, boxesServicesTests } = require("./api/boxes")
const { messagesRoutesTests, messagesServicesTests } = require("./api/messages")
const { defaultRoutesTests } = require("./api/default")

describe("Run tests", () => {
    beforeAll(async () => {
        await db.sync({ force: true })
    })

    boxesRoutesTests()
    boxesServicesTests()
    messagesRoutesTests()
    messagesServicesTests()
    defaultRoutesTests()

    afterAll(() => {
        db.close()
    })
})
