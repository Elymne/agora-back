const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const expressSwagger = require("express-swagger-generator")(app)

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

//const { ProductRoute } = require("./api/products")
//const { PurchaseRoute } = require("./api/purchases")

// Server config.
app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
)

app.get("/", (req, res) => {
    res.json({
        message: "Message service is running !",
    })
})

// Routing.
//app.use("/products", ProductRoute)
//app.use("/customers", PurchaseRoute)

app.get("/math", (req, res) => {
    res.send("B" + "a" + +"a")
})

app.all("*", (req, res) => {
    res.status(404).json({
        error: "not found",
    })
})

module.exports = app
