const axios = require('axios');
require('dotenv').config();

const API = axios.create({
  baseURL: process.env.TOOLBOX_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.TOOLBOX_API_KEY}` },
});

async function getFileList() {
  try {
    const { data } = await API.get('/files');
    return data.files;
  } catch (error) {
    console.error('Error al obtener la lista de archivos:', error.message);
    throw error;
  }
}

async function getFileContent(fileName) {
  try {
    const { data } = await API.get(`/file/${fileName}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener el contenido de ${fileName}:`, error.message);
    throw error;
  }
}

module.exports = { getFileList, getFileContent };
