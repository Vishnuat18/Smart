let esp8266IP = "http://192.168.1.100"; // Replace with your ESP8266's actual IP

function toggleLight(lightNumber) {
    const button = document.querySelector(`#light${lightNumber} button`);
    const img = button.querySelector("img");
    const span = button.querySelector("span");

    // Ensure absolute image path comparison
    let isOn = img.src.includes("1739147870234.png"); // Check if the light is ON
    let action = isOn ? "off" : "on"; // Toggle action

    fetch(`${esp8266IP}/light/${lightNumber}/${action}`)
        .then(response => response.text())
        .then(data => {
            console.log(data); // Debugging response from ESP8266
            
            // Ensure image change based on the response
            if (action === "on") {
                img.src = window.location.origin + "/img/1739147870234.png"; // Light ON image
                span.innerText = `Turn Off Light ${lightNumber}`;
            } else {
                img.src = window.location.origin + "/img/1739147870248.png"; // Light OFF image
                span.innerText = `Turn On Light ${lightNumber}`;
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}