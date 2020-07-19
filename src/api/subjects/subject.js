const Sequelize = require("sequelize")
const db = require("./../../configurations/db")

const Subject = db.define(
    "subject",
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
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "subject",
    },
)

module.exports = Subject
