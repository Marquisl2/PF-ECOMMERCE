const toolboxProvider = require('../providers/toolbox-provider');
const filesService = require('../services/files.service');

const getProcessedFiles = async (req, res, next) => {
  try {
    const processed = await filesService.processFiles();
    res.status(200).json(processed);
  } catch (error) {
    next(error);
  }
};

const getFilesList = async (req, res, next) => {
  try {
    const fileList = await filesService.filesList();
    res.status(200).json(fileList);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProcessedFiles, getFilesList };