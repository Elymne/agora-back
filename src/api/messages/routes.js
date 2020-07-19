const router = require("express").Router()
const messageController = require("./controller")

/**
 * @group Message - Operations about messages
 * @route GET /messages
 * @returns {array} 200 - JSON of the messages
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
router.get("/:id", messageController.getOneMessageByID)

/**
 * @group Message - Operations about messages
 * @route POST /messages
 * @param {object} message_object.body.required - message_object
 * @returns {object} 201
 * @returns {Error}  default - Unexpected error
 */
router.post("/", messageController.createMessage)

/**
 * @group Message - Operations about messages
 * @route PUT /messages
 * @param {UUID} message_id.query.required - message_id
 * @param {object} message_object.body.required - message_object
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
