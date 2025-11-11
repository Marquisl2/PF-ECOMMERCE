const toolboxProvider = require("../providers/toolbox-provider");

const processFiles = async () => {
  const fileList = await toolboxProvider.getFileList();
  const results = [];

  for (const filename of fileList) {
    try {
      const fileData = await toolboxProvider.getFileContent(filename);
      if (!fileData) continue;

      const lines = fileData.split("\n").map(l => l.trim()).filter(Boolean);
      if (lines.length <= 1) continue;

      const [, ...rows] = lines;
      const validLines = [];

      for (const row of rows) {
        const parts = row.split(",");

        // Debe tener 4 columnas
        if (parts.length !== 4) continue;

        const [file, text, numberStr, hex] = parts;

        if (!file || !text || !numberStr || !hex) continue;
        if (isNaN(Number(numberStr))) continue;
        if (hex.length !== 32) continue;

        validLines.push({
          text,
          number: Number(numberStr),
          hex,
        });
      }

      if (validLines.length > 0) {
        results.push({
          file: filename,
          lines: validLines,
        });
      }

    } catch (error) {
      console.error(`Error procesando ${filename}:`, error.message);
      continue;
    }
  }

  return results;
};

const filesList = async () => {
  return await toolboxProvider.getFileList();
};

module.exports = { processFiles, filesList };
