const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const expressSwagger = require("express-swagger-generator")(app)

const { defaultRoutes } = require("./api/default")
const { messageRoutes } = require("./api/messages")
const { boxRoutes } = require("./api/boxes")

let options = {
    swaggerDefinition: {
        info: {
            description: "This is a sample server",
            title: "Swagger",
            version: "1.0.0",
        },
        host: "localhost:3030",
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
app.use("", defaultRoutes)
app.use("/messages", messageRoutes)
app.use("/boxes", boxRoutes)

module.exports = app
