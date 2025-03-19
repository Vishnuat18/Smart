const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Configurations
const PORT = process.env.PORT || 3001;
const NODEMCU_IP = process.env.NODEMCU_IP || '192.168.114.160'; // Use an environment variable for NodeMCU IP

// Middleware
app.use(cors()); // Handle cross-origin requests
app.use(morgan('dev')); // Log incoming requests
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Proxy endpoint to forward requests to NodeMCU
app.get('/light/:id/:action', (req, res) => {
    const { id, action } = req.params;
    const url = `http://${NODEMCU_IP}/light/${id}/${action}`;

    http.get(url, (proxyRes) => {
        let data = '';

        proxyRes.on('data', (chunk) => {
            data += chunk;
        });

        proxyRes.on('end', () => {
            res.send(data);
        });
    }).on('error', (error) => {
        console.error(`Error: ${error.message}`);
        res.status(500).send({ error: `Failed to communicate with NodeMCU: ${error.message}` });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful Shutdown
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    process.exit();
});