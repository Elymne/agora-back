const Sequelize = require("sequelize")
const db = require("./../../configurations/db")
const { Message } = require("./../messages")

const Box = db.define(
    "box",
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
    },
    {
        tableName: "box",
    },
)

Box.hasMany(Message, {
    foreignKey: "id_box",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

module.exports = Box
