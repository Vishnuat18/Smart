function toggleLight(lightNumber) {
  var xhr = new XMLHttpRequest();
  var button = document.getElementById("light" + lightNumber).querySelector("button");
  var currentState = button.querySelector("span").innerText.includes("Off") ? "off" : "on";
  var action = currentState === "off" ? "on" : "off";

  xhr.open("GET", "http://192.168.114.160/light/" + lightNumber + "/" + action, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      button.querySelector("span").innerText = "Turn " + (action === "on" ? "Off" : "On") + " Light " + lightNumber;
    }
  };
  xhr.send();
}