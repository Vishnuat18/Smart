// Function to toggle the light state (ON/OFF)
function toggleLight(lightId) {
    const light = document.getElementById(`light${lightId}`).querySelector("button");
    const img = light.querySelector("img");
    const span = light.querySelector("span");

    if (img.src.includes("1739147870248.png")) {
        // If the light is OFF, turn it ON
        img.src = "img/1739147870234.png";
        span.textContent = `Turn Off Light ${lightId}`;
    } else {
        // If the light is ON, turn it OFF
        img.src = "img/1739147870248.png";
        span.textContent = `Turn On Light ${lightId}`;
    }
}

// Function to initialize light states (ensures all lights start OFF)
function initializeLights() {
    for (let i = 1; i <= 3; i++) {
        const light = document.getElementById(`light${i}`).querySelector("button");
        const img = light.querySelector("img");
        const span = light.querySelector("span");

        img.src = "img/1739147870248.png"; // Set initial OFF state
        span.textContent = `Turn On Light ${i}`;
    }
}

// Ensure lights are initialized when the page loads
document.addEventListener("DOMContentLoaded", initializeLights);