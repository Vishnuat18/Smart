// Function to toggle light state (ON/OFF)
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

// Ensure all lights start in OFF state when the page loads
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i <= 3; i++) {
        const light = document.getElementById(`light${i}`).querySelector("button");
        const img = light.querySelector("img");
        const span = light.querySelector("span");

        img.src = "img/1739147870248.png"; // Initial OFF state
        span.textContent = `Turn On Light ${i}`;
    }
});