const Sequelize = require("sequelize")
const db = require("./../../configurations/db")
const { useFakeXMLHttpRequest } = require("sinon")

const { Message } = require("./../messages")

const Box = db.define(
    "Box",
    {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.UUIDV4(),
        },
        title: {
            type: Sequelize.STRING,
            allowNull: useFakeXMLHttpRequest,
        },
    },
    {
        tableName: "box",
    },
)

Box.hasMany(Message)

module.exports = Box
