const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware to allow cross-origin requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint to forward requests to NodeMCU
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
        console.error(`Error: ${e.message}`);
        res.status(500).send(`Error: ${e.message}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
