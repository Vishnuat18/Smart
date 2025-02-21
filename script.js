let lightStates = [false, false, false];

function toggleLight(lightNumber) {
    const button = document.querySelector(`#light${lightNumber} button`);
    const img = button.querySelector("img");
    const span = button.querySelector("span");

    lightStates[lightNumber - 1] = !lightStates[lightNumber - 1];

    if (lightStates[lightNumber - 1]) {
        img.src = "img/1739147870234.png"; // On state image
        span.innerText = `Turn Off Light ${lightNumber}`;
        fetch(`/light/${lightNumber}/on`);
    } else {
        img.src = "img/1739147870248.png"; // Off state image
        span.innerText = `Turn On Light ${lightNumber}`;
        fetch(`/light/${lightNumber}/off`);
    }
}