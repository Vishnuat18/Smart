function toggleLight1() {
    var button = document.getElementById("light1").querySelector("button");
    var currentState = button.querySelector("span").innerText.includes("Off") ? "off" : "on";
    var action = currentState === "on" ? "off" : "on";

    fetch(`http://localhost:3001/light/1/${action}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load resource: The server responded with a status of ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            button.querySelector("span").innerText = "Turn " + (action === "on" ? "Off" : "On") + " Light 1";
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function toggleLight2() {
    var button = document.getElementById("light2").querySelector("button");
    var currentState = button.querySelector("span").innerText.includes("Off") ? "off" : "on";
    var action = currentState === "off" ? "on" : "off";

    fetch(`http://localhost:3001/light/2/${action}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load resource: The server responded with a status of ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            button.querySelector("span").innerText = "Turn " + (action === "on" ? "Off" : "On") + " Light 2";
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function toggleLight3() {
    var button = document.getElementById("light3").querySelector("button");
    var currentState = button.querySelector("span").innerText.includes("Off") ? "off" : "on";
    var action = currentState === "off" ? "on" : "off";

    fetch(`http://localhost:3001/light/3/${action}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load resource: The server responded with a status of ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            button.querySelector("span").innerText = "Turn " + (action === "on" ? "Off" : "On") + " Light 3";
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
