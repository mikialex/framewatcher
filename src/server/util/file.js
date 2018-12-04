const fs = require('fs');

function loadPNGFromFile(path) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path)
      .pipe(new PNG()).on('parsed', (img) => {
        resolve(img);
    });
  })
}

function loadAllFileInFolderAsStringList(dirPath, reg) {
  const fileList = fs.readdirSync(dirPath);
  const result = [];
  fileList.forEach(file => {
    if (!reg.test(file)) {
      return;
    }
    const filePath = dirPath + '/' + file;
    if (fs.statSync(filePath).isFile()) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      result.push({
        fileName: file,
        filePath,
        fileContent
      });
    }
  })
  return result;
}

module.exports = {
  loadPNGFromFile,
  loadAllFileInFolderAsStringList
}