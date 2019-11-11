const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/breeds', (req, res) => {
  res.writeHead(200, {
    'content-type': 'application/json'
  });
  fs.createReadStream('./breeds.json').pipe(res);
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => { console.log(`Listening on ${PORT}`) });
