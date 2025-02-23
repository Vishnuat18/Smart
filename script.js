function toggleLight(lightNumber) {
  var xhr = new XMLHttpRequest();
  var currentState = document.getElementById("light" + lightNumber).innerText;
  var action = currentState.includes("Off") ? "on" : "off";

  xhr.open("GET", "http://192.168.114.160/light/" + lightNumber + "/" + action, true);
  xhr.send();

  var button = document.getElementById("light" + lightNumber).querySelector("button");
  if (action === "on") {
    button.querySelector("span").innerText = "Turn Off Light " + lightNumber;
  } else {
    button.querySelector("span").innerText = "Turn On Light " + lightNumber;
  }
}