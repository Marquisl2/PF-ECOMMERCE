const { Router } = require('express');
const router = Router();

const files = require ('./files');

router.use('/files', files)


module.exports = router;
