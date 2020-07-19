const services = require("./services")
const ENUM_RESPONSE = require("./enum")

const getSubjects = (_, response) => {
    services
        .getAll()
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err))
}

const getOneSubjectByID = (request, response) => {
    const id = request.params.id

    services
        .getOneByID(id)
        .then((result) => {
            if (!result) response.status(404).send(ENUM_RESPONSE.SUBJECT_NOT_FOUND)
            else response.status(200).send(result)
        })
        .catch((err) => response.Status(500).send(err))
}

const createSubject = (request, response) => {
    const subject = request.body

    services
        .create(subject)
        .then((result) => response.status(201).send(result))
        .catch((err) => response.status(500).send(err))
}

const updateSubject = (request, response) => {
    const subject = request.body
    const id = request.params.id

    services
        .update(id, subject)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err))
}

const destroySubject = (request, response) => {
    const id = request.params.id

    services
        .destroy(id)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err))
}

module.exports = { getSubjects, getOneSubjectByID, createSubject, updateSubject, destroySubject }
