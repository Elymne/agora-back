const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const expressSwagger = require("express-swagger-generator")(app)

const { messageRoutes } = require("./api/messages")
const { boxRoutes } = require("./api/boxes")
const { subjectRoutes } = require("./api/subjects")

const { defaultRoutes } = require("./api/default")

let options = {
    swaggerDefinition: {
        info: {
            description: "This is a sample server",
            title: "Swagger",
            version: "1.0.0",
        },
        host: "localhost:3020",
        basePath: "",
        produces: ["application/json"],
        schemes: ["http"],
    },
    basedir: __dirname, //app absolute path
    files: ["./**/**/*.js"], //Path to the API handle folder
}
expressSwagger(options)

// Server config.
app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
)

// Routing.

app.use("/messages", messageRoutes)
app.use("/boxes", boxRoutes)
app.use("/subjects", subjectRoutes)

app.use("", defaultRoutes)

module.exports = app
