const asyncHandler = require('express-async-handler')

//Get User note
//GET Request /api/notes
//Private
const getNotes = asyncHandler (async(req, res) => {
    res.status(200).json({ message: 'Get notes' })
})

//Add note
//POST Request /api/notes
//Private
const addNote = asyncHandler (async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field to continue')
    }
    res.status(200).json({ message: 'Create note' })
})

//Edit note
//PUT Request /api/notes/:id
//Private
const editNote = asyncHandler (async(req, res) => {
    res.status(200).json({ message: `Update note ${req.params.id}` })
})

//Delete note
//DELETE Request /api/notes/:id
//Private
const deleteNote = asyncHandler (async(req, res) => {
    res.status(200).json({ message: `Delete note ${req.params.id}` })
})

//Get User note
//GET Request /api/notes/pinned-notes
//Private
const pinNote = asyncHandler (async(req, res) => {
    res.status(200).json({ message: 'Pinned notes' });
})

module.exports = {
    getNotes,
    addNote,
    editNote,
    deleteNote,
    pinNote,
}