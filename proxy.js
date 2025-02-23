const express = require('express');
const app = express();

app.get('/light/:lightNumber/:action', (req, res) => {
    const lightNumber = req.params.lightNumber;
    const action = req.params.action;

    try {
        // Your logic to toggle the light
        // For example:
        if (toggleLight(lightNumber, action)) {
            res.status(200).send('Light toggled successfully');
        } else {
            res.status(400).send('Invalid light number or action');
        }
    } catch (error) {
        console.error('Error toggling light:', error);
        res.status(500).send('Internal Server Error');
    }
});

function toggleLight(lightNumber, action) {
    // Implement the logic to toggle the light
    // Return true if successful, false otherwise
    return true;
}

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
