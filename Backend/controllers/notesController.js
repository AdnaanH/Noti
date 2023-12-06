const asyncHandler = require('express-async-handler')
const Note = require('../models/notesModel')

//Get User note
//GET Request /api/notes
//Private
const getNotes = asyncHandler (async(req, res) => {
    const notes = await Note.find()
    res.status(200).json(notes)
})

//Add note
//POST Request /api/notes
//Private
const addNote = asyncHandler (async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field to continue')
    }

    const note = await Note.create({
        text: req.body.text,
    })
    res.status(200).json(note)
})

//Edit note
//PUT Request /api/notes/:id
//Private
const editNote = asyncHandler (async(req, res) => {
    const note = await Note.findById(req.params.id)

    if(!note) {
        res.status(400)
        throw new Error('Note not found')
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedNote)
})

//Delete note
//DELETE Request /api/notes/:id
//Private
const deleteNote = asyncHandler (async(req, res) => {
    const note = await Note.findById(req.params.id)

    if(!note) {
        res.status(400)
        throw new Error('Note not found')
    }

    await note.deleteOne()

    res.status(200).json({ id: req.params.id })
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