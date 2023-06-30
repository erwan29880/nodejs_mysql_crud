const express = require('express');
const controller = require('../controller/ctrl');
const router = express.Router();

router.get('/', controller.mysql);
router.get('/mysqlGet', controller.mysqlGet);
router.post('/mysqlPost', controller.mysqlPost);
router.put('/mysqlPut', controller.mysqlPut);
router.delete('/mysqlDel', controller.mysqlDel);

module.exports = router