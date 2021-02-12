const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const path = require('path');
var http = require("http");

module.exports = function upload(req, res) {
  var form = new IncomingForm();
  let readStream;
  form.on('file', (field, file) => {
    let filename = file.name;
    let src = file.path;
    let destDir = path.join(__dirname, 'database');

    fs.access(destDir, (err) => {
      if(err)
        fs.mkdirSync(destDir);

      copyFile(src, path.join(destDir, filename));
      var reqBody = src;
      req.write(reqBody);
      req.end();


    });
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};

function copyFile(src, dest) {

  console.log(dest);
  let readStream = fs.createReadStream(src);

  readStream.once('error', (err) => {
    console.log(err);
  });

  readStream.once('end', () => {
    console.log('done copying');
  });

  readStream.pipe(fs.createWriteStream(dest));
}
