const app = require("./server")
const sequelize = require("./configurations/db")
const logger = require("./configurations/logger")
const http = require("http")

const port = process.env.PORT

sequelize.sync().then(() => {
    const server = http.createServer(app)

    server.listen(port, () => {
        logger.info(`App running on port ${process.env.PORT}.`)
    })
})
