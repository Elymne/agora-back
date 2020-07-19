const services = require("./services")
const ENUM_RESPONSE = require("./enum")

const getMessages = (_, response) => {
    services
        .getAll()
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err))
}

const getOneMessageByID = (request, response) => {
    const { id } = request.params
    services
        .getOneByID(id)
        .then((result) => {
            if (!result) response.sendStatus(404).send(ENUM_RESPONSE.NO_DATA_FOUND)
            else response.status(200).send(result)
        })
        .catch((err) => response.status(500).sendStatus(err))
}

const createMessage = (request, response) => {
    const message = request.body
    services
        .create(message)
        .then((result) => response.status(201).send(result))
        .catch((err) => response.status(500).send(err))
}

const updateMessage = (request, response) => {
    const { id } = request.params
    const message = request.body
    services
        .update(id, message)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err))
}

const destroyMessage = (request, response) => {
    const id = request.params.id
    services
        .destroy(id)
        .then(() => response.status(204).send(id))
        .catch((err) => response.status(500).send(err))
}

module.exports = { getMessages, getOneMessageByID, createMessage, updateMessage, destroyMessage }
