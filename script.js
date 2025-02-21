let espIP = "http://192.168.1.100"; // Replace with your ESP8266's actual IP

function toggleLight(light) {
    let newState = lightStates[light] ? "off" : "on"; 
    fetch(`${espIP}/light/${light}/${newState}`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            lightStates[light] = !lightStates[light];

            document.getElementById(`light${light}-btn`).textContent = lightStates[light] 
                ? `Turn OFF Light ${light}` 
                : `Turn ON Light ${light}`;

            document.getElementById(`light${light}-img`).src = lightStates[light] 
                ? ""img/1739147870234.png" 
                : ""img/1739147870248.png";
        })
        .catch(error => console.error("Error:", error));
}