const http = require(`http`);
const url = require(`url`);
const fs = require(`fs`);
const {promisify} = require(`util`);
const path = require(`path`);
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const readfile = promisify(fs.readFile);

const EXTENSION_MAP = {
  'css': `text/css`,
  'html': `text/html; charset=UTF-8`,
  'jpg': `image/jpeg`,
  'ico': `image/x-icon`
};

const HOSTNAME = `127.0.0.1`;

const readFile = async (path, res) => {
  const data = await readFile(path);
  console.log(data);
  const extention = path.extname(path);
  res.setHeader(`content-type`, EXTENSION_MAP[extention] || `text/plain`);
  res.setHeader(`content-length`, Buffer.byteLength(data));
  res.end(data);
};

const staticFolder = `${process.cwd()}/static`;

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  const absolutePath = pathname === `/` ? staticFolder + `/index.html` : staticFolder + pathname;
  console.log(pathname, absolutePath);

  (async () => {
    try {
      res.statusCode = 200;
      res.statusMessage = `OK`;
      await readFile(absolutePath, res);
    } catch (e) {
      res.writeHead(404, `Not found`);
      res.end();
    }
  })().catch((e) => {
    res.writeHead(500, e.message, {
      'content-type': `text/plain`
    });
    res.end(e.message);
  });


});

module.exports = {
  run(port = 3000) {
    server.listen(port, HOSTNAME, () => {
      console.log(`Server running at http://${HOSTNAME}:${port}/`);
    });
  }
};
