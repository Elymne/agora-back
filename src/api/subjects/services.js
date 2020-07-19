const Subject = require("./subject")
const Box = require("../boxes/box")

// Basics CRUD functions (create, read, update, delete).

const getAll = () => Subject.findAll()

const getOneByID = (id) => Subject.findByPk(id)

const create = (subject) => Subject.create(subject)

const update = (id, subject) => Subject.update(subject, { where: { id: id } })

const destroy = (id) => Subject.destroy({ where: { id: id } })

// Other functions.

/**
 * Add a box linked to a subject given his id.
 *
 * @param {*} id - id of the box
 * @param {*} box - box object
 */
const addSubject = (id, box) => {
    box.id_subject = id
    return Box.create(box)
}

module.exports = { getAll, getOneByID, create, update, destroy, addSubject }
