const router = require("express").Router()
const messageController = require("./controller")

/**
 * @group Message - Operations about messages
 * @route GET /messages
 * @param {UUID} message_id.query.required - message_id
 * @returns {object} 200 - JSON of the messages
 * @returns {Error}  default - Unexpected error
 */
router.get("/", messageController.getMessages)

/**
 * @group Message - Operations about messages
 * @route GET /messages/{id}
 * @param {UUID} message_id.query.required - message_id
 * @returns {object} 200 - JSON of the message
 * @returns {Error}  default - Unexpected error
 */
router.get("/:id", messageController.getOneMessageById)

/**
 * @group Message - Operations about messages
 * @route POST /messages
 * @param {string} message_content.params.required - message_content
 * @returns {object} 201
 * @returns {Error}  default - Unexpected error
 */
router.post("/", messageController.createMessage)

/**
 * @group Message - Operations about messages
 * @route PUT /messages
 * @param {UUID} message_id.query.required - message_id
 * @param {string} message_content.params.required - message_content
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put("/:id", messageController.updateMessage)

/**
 * @group Message - Operations about messages
 * @route DELETE /messages
 * @param {UUID} message_id.query.required - message_id
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete("/:id", messageController.destroyMessage)

module.exports = router
