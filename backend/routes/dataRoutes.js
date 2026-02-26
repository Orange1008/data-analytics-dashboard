const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/dataController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getData);

module.exports = router;
