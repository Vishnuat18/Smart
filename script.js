function toggleLight(lightNumber) {
  var xhr = new XMLHttpRequest();
  var action = "on";

  xhr.open("GET", "http://192.168.114.160/light/" + lightNumber + "/" + action, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var button = document.getElementById("light" + lightNumber).querySelector("button");
      var currentState = button.querySelector("span").innerText.includes("Off") ? "Off" : "On";
      if (currentState === "Off") {
        action = "on";
        button.querySelector("span").innerText = "Turn On Light " + lightNumber;
      } else {
        action = "off";
        button.querySelector("span").innerText = "Turn Off Light " + lightNumber;
      }
      xhr.open("GET", "http://192.168.114.160/light/" + lightNumber + "/" + action, true);
      xhr.send();
    }
  };
  xhr.send();
}