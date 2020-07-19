const Subject = require("./subject")

const getAll = () => Subject.findAll()

const getOneByID = (id) => Subject.findByPk(id)

const create = (subject) => Subject.create(subject)

const update = (id, subject) => Subject.update(subject, { where: { id: id } })

const destroy = (id) => Subject.destroy({ where: { id: id } })

module.exports = { getAll, getOneByID, create, update, destroy }
