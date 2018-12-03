
function loadPNGFromFile(path) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path)
      .pipe(new PNG()).on('parsed', (img) => {
        resolve(img);
    });
  })
}