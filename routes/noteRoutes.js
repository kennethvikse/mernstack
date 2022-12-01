const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesControllers')

router.route('/')
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote)

module.exports = router