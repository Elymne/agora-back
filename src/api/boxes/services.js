const Box = require("./box")
const { Message } = require("../messages")

// Basics CRUD functions (create, read, update, delete).

const getAll = () => Box.findAll({ include: Message })

const getOneByID = (id) => Box.findByPk(id, { include: Message })

const create = (box) => Box.create(box)

const update = (id, box) => Box.update(box, { where: { id: id } })

const destroy = (id) => Box.destroy({ where: { id: id } })

// Other functions.

/**
 * Add a message to a box given his id.
 *
 * @param {*} id - id of the box
 * @param {*} message - message object
 */
const addMessage = (id, message) => {
    message.id_box = id
    return Message.create(message)
}

module.exports = { getAll, getOneByID, create, update, destroy, addMessage }
