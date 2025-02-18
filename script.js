function controlDevice(command) {
    fetch(`/${command}`)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}
