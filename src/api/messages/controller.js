const services = require("./services")
const ENUM_RESPONSE = require("./enum")

const getMessages = (_, response) => {
    services
        .getAll()
        .then((data) => response.status(200).send(data))
        .catch((err) => response.status(500).send(err))
}

const getOneMessageById = (request, response) => {
    const { id } = request.params
    services
        .getOneById(id)
        .then((data) => {
            if (!data) {
                response.sendStatus(404).send(ENUM_RESPONSE.NO_DATA_FOUND)
                return
            } else {
                response.status(200).send(data)
                return
            }
        })
        .catch((err) => response.status(500).sendStatus(err))
}

const createMessage = (request, response) => {
    const message = request.body
    services
        .create(message)
        .then((data) => response.status(201).send(data))
        .catch((err) => response.status(500).send(err))
}

const updateMessage = (request, response) => {
    const { id } = request.params
    const message = request.body
    services
        .update(id, message)
        .then((data) => response.status(200).send(data))
        .catch((err) => response.status(500).send(err))
}

const destroyMessage = (request, response) => {
    const id = request.params.id
    services
        .destroy(id)
        .then(() => response.status(204).send(id))
        .catch((err) => response.status(500).send(err))
}

module.exports = { getMessages, getOneMessageById, createMessage, updateMessage, destroyMessage }
