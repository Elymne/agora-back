const services = require("./services")

const getMessages = (request, response) => {
    services
        .getAll()
        .then((data) => {
            if (!data) response.sendStatus(404)
            else response.status(200).send(data)
        })
        .catch((err) => response.status(500).send(err))
}

const getOneMessageById = (request, response) => {
    const { id } = request.params
    services
        .getOneById(id)
        .then((data) => {
            if (!data) response.sendStatus(404)
            else response.status(200).send(data)
        })
        .catch((err) => response.status(500).sendStatus(err))
}

const createMessage = (request, response) => {
    const message = request.body
    services
        .create(message)
        .then((data) => {
            if (!data) response.sendStatus(404)
            else response.status(201).send(data)
        })
        .catch((err) => response.status(500).send(err))
}

const updateMessage = (request, response) => {
    const { id } = request.params
    const message = request.body
    services
        .update(id, message)
        .then((data) => {
            if (!data) response.sendStatus(404)
            else response.status(200).send(data)
        })
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
