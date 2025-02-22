let esp8266IP = "http://192.168.1.100"; // Replace with your ESP8266's IP

function toggleLight(lightNumber) {
    const button = document.querySelector(`#light${lightNumber} button`);
    const img = button.querySelector("img");
    const span = button.querySelector("span");

    let isOn = img.src.includes("1739147870234.png"); // Check if the light is ON
    let action = isOn ? "off" : "on"; // Toggle action

    fetch(`${esp8266IP}/light/${lightNumber}/${action}`)
        .then(response => response.text())
        .then(data => {
            console.log(data); // Debug response from ESP8266

            if (action === "on") {
                img.src = "img/1739147870248.png"; // Change to ON image
                span.innerText = `Turn Off Light ${lightNumber}`;
            } else {
                img.src = "img/1739147870234.png"; // Change to OFF image
                span.innerText = `Turn On Light ${lightNumber}`;
            }
        })
        .catch(error => console.error("Error:", error));
}