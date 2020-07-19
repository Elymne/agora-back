const Sequelize = require("sequelize")
const db = require("./../../configurations/db")
const Box = require("../boxes/box")

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

Subject.hasMany(Box, {
    foreignKey: "id_subject",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

module.exports = Subject
