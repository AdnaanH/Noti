const express = require('express')
const router = express.Router()
const { getNotes, 
        addNote, 
        editNote, 
        deleteNote, 
        pinNote }
        = require('../controllers/notesController')

router.route('/').get(getNotes).post(addNote)
router.route('/:id').put(editNote).delete(deleteNote)
router.get('/pinned-notes', pinNote);

module.exports = router