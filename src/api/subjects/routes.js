const router = require("express").Router()
const subjectController = require("./controller")

/**
 * @group Subject - Operations about subjects
 * @route GET /subjects
 * @returns {object} 200 - JSON of the subjects
 * @returns {Error}  default - Unexpected error
 */
router.get("/", subjectController.getSubjects)

/**
 * @group Subject - Operations about subjects
 * @route GET /subjects/{id}
 * @param {UUID} message_id.query.required - message_id
 * @returns {object} 200 - JSON of the message
 * @returns {Error}  default - Unexpected error
 */
router.get("/:id", subjectController.getOneSubjectByID)

/**
 * @group Subject - Operations about subjects
 * @route POST /subjects
 * @param {object} subject.body.required - subject_object
 * @returns {object} 201
 * @returns {Error}  default - Unexpected error
 */
router.post("/", subjectController.createSubject)

/**
 * @group Subject - Operations about subjects
 * @route PUT /subjects/{id}
 * @param {UUID} subject_id.query.required - subject_id
 * @param {object} subject_object.body.required - subject_object
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put("/:id", subjectController.updateSubject)

/**
 * @group Subject - Operations about subjects
 * @route DELETE /subjects/{id}
 * @param {UUID} subject_id.query.required - subject_id
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete("/:id", subjectController.destroySubject)

module.exports = router
