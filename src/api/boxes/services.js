const Box = require("./box")

const getAll = () => Box.findAll()

const getOneById = (id) => Box.findByPk(id)

const create = (box) => Box.create(box)

const update = (id, box) => Box.update(box, { where: { id: id } })

const destroy = (id) => Box.destroy({ where: { id: id } })

module.exports = { getAll, getOneById, create, update, destroy }
