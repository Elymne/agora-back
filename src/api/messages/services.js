const Message = require("./message")

const getAll = () => Message.findAll()

const getOneByID = (id) => Message.findByPk(id)

const create = (message) => Message.create(message)

const update = (id, message) => Message.update(message, { where: { id: id } })

const destroy = (id) => Message.destroy({ where: { id: id } })

module.exports = { getAll, getOneByID, create, update, destroy }
