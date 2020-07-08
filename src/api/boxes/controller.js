const services = require("./services")

const getBoxes = (_, response) => {
    services
        .getAll()
        .then((data) => {
            if (!data) response.sendStatus(404)
            else response.status(200).send(data)
        })
        .catch((err) => response.status(500).send(err))
}

const getOneBoxById = (request, response) => {
    const { id } = request.params
    services
        .getOneById(id)
        .then((data) => {
            if (!data) response.sendStatus(404)
            else response.status(200).send(data)
        })
        .catch((err) => response.status(500).sendStatus(err))
}

const createBox = (request, response) => {
    const message = request.body
    services
        .create(message)
        .then((data) => {
            if (!data) response.sendStatus(404)
            else response.status(201).send(data)
        })
        .catch((err) => response.status(500).send(err))
}

const updateBox = (request, response) => {
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

const destroyBox = (request, response) => {
    const id = request.params.id
    services
        .destroy(id)
        .then(() => response.status(204).send(id))
        .catch((err) => response.status(500).send(err))
}

const addMessage = (request, response) => {
    const id = request.params.id
    const message = request.body
    services
        .addMessage(id, message)
        .then((data) => {
            if (!data) response.sendStatus(404)
            else response.status(200).send(data)
        })
        .catch((err) => response.status(500).send(err))
}

module.exports = { getBoxes, getOneBoxById, createBox, updateBox, destroyBox, addMessage }
