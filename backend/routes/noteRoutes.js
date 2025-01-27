// routes/noteRoutes.js
import express from 'express';
import noteController from '../controllers/noteController.js';

const router = express.Router();


router.get('/tags', (req, res) => noteController.getAllTags(req, res));
router.get('/', (req, res) => noteController.getAllNotes(req, res));
router.post('/', (req, res) => noteController.createNote(req, res));
router.get('/:id', (req, res) => noteController.getNoteById(req, res));
router.put('/:id', (req, res) => noteController.updateNote(req, res));
router.delete('/:id', (req, res) => noteController.deleteNote(req, res));

export default router;