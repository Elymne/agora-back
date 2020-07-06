const Sequelize = require("sequelize")
const db = require("./../../configurations/db")
const { useFakeXMLHttpRequest } = require("sinon")

const Message = db.define(
    "Message",
    {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.UUIDV4(),
        },
        content: {
            type: Sequelize.STRING,
            allowNull: useFakeXMLHttpRequest,
        },
    },
    {
        tableName: "message",
    },
)

module.exports = Message
