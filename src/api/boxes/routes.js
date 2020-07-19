const router = require("express").Router()
const boxController = require("./controller")

/**
 * @group Box - Operations about boxes
 * @route GET /boxes
 * @returns {array} 200 - JSON of the boxes
 * @returns {Error}  default - Unexpected error
 */
router.get("/", boxController.getBoxes)

/**
 * @group Box - Operations about boxes
 * @route GET /boxes/{id}
 * @param {UUID} box_id.query.required - box_id
 * @returns {object} 200 - JSON of the box
 * @returns {Error}  default - Unexpected error
 */
router.get("/:id", boxController.getOneBoxById)

/**
 * @group Box - Operations about boxes
 * @route POST /boxes
 * @param {object} box_object.body.required - box_object
 * @returns {object} 201
 * @returns {Error}  default - Unexpected error
 */
router.post("/", boxController.createBox)

/**
 * @group Box - Operations about boxes
 * @route PUT /boxes/{id}
 * @param {UUID} box_id.query.required - box_id
 * @param {object} box_object.body.required - box_object
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put("/:id", boxController.updateBox)

/**
 * @group Box - Operations about boxes
 * @route DELETE /boxes/{id}
 * @param {UUID} box_id.query.required - box_id
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete("/:id", boxController.destroyBox)

/**
 * @group Message - Operations about messages
 * @route POST /boxes/{id}/messages
 * @param {UUID} box_id.query.required - box_id
 * @param {object} message_object.body.required
 * @returns {object} 201 - JSON of the message
 * @returns {Error}  default - Unexpected error
 */
router.post("/:id/messages", boxController.addMessage)

module.exports = router
