const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/light/:id/:action', (req, res) => {
  const { id, action } = req.params;
  const url = `http://192.168.114.160/light/${id}/${action}`;

  http.get(url, (proxyRes) => {
    let data = '';

    proxyRes.on('data', (chunk) => {
      data += chunk;
    });

    proxyRes.on('end', () => {
      res.send(data);
    });
  }).on('error', (e) => {
    res.status(500).send(`Error: ${e.message}`);
  });
});

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
})
