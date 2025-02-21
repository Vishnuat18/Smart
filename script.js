let esp8266IP = "http://192.168.1.100"; // Replace with IP

function toggleLight(lightNumber) {
    const button = document.querySelector(`#light${lightNumber} button`);
    const img = button.querySelector("img");
    const span = button.querySelector("span");

    let isOn = img.src.includes("1739147870234.png"); // On image check
    let action = isOn ? "off" : "on"; // Toggle action

    fetch(`${esp8266IP}/light/${lightNumber}/${action}`)
        .then(response => response.text())
        .then(data => {
            console.log(data); // Debugging response from ESP8266

            if (action === "on") {
                img.src = "img/1739147870234.png"; // On image
                span.innerText = `Turn Off Light ${lightNumber}`;
            } else {
                img.src = "img/1739147870248.png"; // Off image
                span.innerText = `Turn On Light ${lightNumber}`;
            }
        })
        .catch(error => console.error("Error:", error));
}