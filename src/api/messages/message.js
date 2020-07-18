const Sequelize = require("sequelize")
const db = require("./../../configurations/db")

const Message = db.define(
    "message",
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
            allowNull: false,
        },
    },
    {
        tableName: "message",
    },
)

module.exports = Message
