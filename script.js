let esp8266IP = "http://192.168.114.160"; // Your ESP8266 IP

function toggleLight(lightNumber) {
    const button = document.querySelector(`#light${lightNumber} button`);
    const img = button.querySelector("img");
    const span = button.querySelector("span");

    let isOn = img.src.includes("1739147870234.png"); // Check light state
    let action = isOn ? "off" : "on";

    fetch(`${esp8266IP}/light/${lightNumber}/${action}`, { mode: "no-cors" })
        .then(() => {
            if (action === "on") {
                img.src = "img/1739147870234.png";
                span.innerText = `Turn Off Light ${lightNumber}`;
            } else {
                img.src = "img/1739147870248.png";
                span.innerText = `Turn On Light ${lightNumber}`;
            }
        })
        .catch(error => console.error("Fetch Error:", error));
}