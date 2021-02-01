const express = require('express');

const router = express.Router();

const MxController = require('../controllers/MxController');

// router.use(initializeStaticStateMiddleware);

router.get('/data', MxController.downloadDataById);
router.post('/data', MxController.uploadData);
router.delete('/data', MxController.deleteDataById);

module.exports = router;