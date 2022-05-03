const express = require('express');

// Is this getting called in server.js?
const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/add', courseController.createCourse, (req, res) =>
  res.status(200).json(res.locals.course));

router.delete(`/delete`, courseController.deleteCourse, (req, res) => res.status(200));

router.get('/', courseController.getCourse, (req, res) => res.status(200));

router.patch(`/patch`, courseController.updateCourse, (req, res) => res.status(200));

module.exports = router;
