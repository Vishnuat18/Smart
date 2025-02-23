function toggleLight(lightNumber) {
    var xhr = new XMLHttpRequest();
    var button = document.getElementById("light" + lightNumber).querySelector("button");
    var currentState = button.querySelector("span").innerText.includes("Off") ? "off" : "on";
    var action = currentState === "off" ? "on" : "off";

    xhr.open("GET", `http://localhost:3000/light/${lightNumber}/${action}`, true); // Change URL to your proxy server's address
    xhr.onload = function() {
        if (xhr.status === 500) {
            button.querySelector("span").innerText = "Turn " + (action === "on" ? "Off" : "On") + " Light " + lightNumber;
        }
    };
    xhr.send();
}
