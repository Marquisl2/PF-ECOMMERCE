const { Router } = require("express");
const {  getProcessedFiles, getFilesList } = require("../controllers/filesController");



const router = Router()

router.get('/data', getProcessedFiles);

router.get('/list', getFilesList);


module.exports = router