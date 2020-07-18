const router = require("express").Router()

/**
 * @group Message - Operations about messages
 * @route GET /messages
 * @param {UUID} message_id.query.required - message_id
 * @returns {object} 200 - JSON of the message
 * @returns {Error}  default - Unexpected error
 */
router.get("/", (request, response) => {
    response.json({
        message: "Message service is running !",
    })
})

router.get("/banana", (request, response) => {
    response.json({
        message: "B" + "a" + +"a",
    })
})

router.all("*", (request, response) => {
    response.status(404).json({
        error: "not found",
    })
})

module.exports = router
