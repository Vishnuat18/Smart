// ESP8266 Static IP Address
let esp8266IP = "http://192.168.114.160"; 

// Function to toggle the light
function toggleLight(lightNumber) {
    const button = document.querySelector(`#light${lightNumber} button`);
    const img = button.querySelector("img");
    const span = button.querySelector("span");

    let isOn = img.src.includes("1739147870234.png"); // Check if the light is ON
    let action = isOn ? "off" : "on"; // Toggle between ON and OFF

    // Send request to ESP8266
    fetch(`http://192.168.114.160/light/1/on`)
        .then(response => response.text())
        .then(data => {
            console.log("ESP Response:", data); // Debugging response from ESP8266

            if (action === "on") {
                img.src = "img/1739147870234.png"; // Change to ON image
                span.innerText = `Turn Off Light ${lightNumber}`;
            } else {
                img.src = "img/1739147870248.png"; // Change to OFF image
                span.innerText = `Turn On Light ${lightNumber}`;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("ESP8266 is not reachable! Check the connection.");
        });
}

// Ensure ESP is connected before clicking the button
function checkESPConnection() {
    fetch(`${esp8266IP}/`)
        .then(response => {
            if (response.ok) {
                console.log("ESP8266 Connected!");
            } else {
                console.error("ESP8266 Connection Failed!");
                alert("ESP8266 is not connected to the network.");
            }
        })
        .catch(error => {
            console.error("ESP8266 Not Found!", error);
            alert("ESP8266 is not reachable! Check the IP address.");
        });
}

// Call this function on page load to verify ESP connection
window.onload = checkESPConnection;