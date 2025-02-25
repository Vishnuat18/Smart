let lightStates = {
    1: false,
    2: false,
    3: false
};

function toggleLight(lightNumber) {
    lightStates[lightNumber] = !lightStates[lightNumber];
    let action = lightStates[lightNumber] ? 'on' : 'off';
    fetch(`http://localhost:3001/light/${lightNumber}/${action}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load resource: The server responded with a status of ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log(`Light ${lightNumber} turned ${action}: ${data}`);
            updateButton(lightNumber, action);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        updateButton(lightNumber, action);
}

function updateButton(lightNumber, action) {
    const button = document.getElementById(`btn${lightNumber}`);
    const image = document.getElementById(`img${lightNumber}`);
    var span = button.querySelector('span')
    span.textContent = action === 'on' ? `Turn Off Light ${lightNumber}` : `Turn On Light ${lightNumber}`;
    image.src = action === 'on' ? 'img/1739147870248.png' : 'img/1739147870234.png' ; // Update image source with the appropriate images for on and off states
}
