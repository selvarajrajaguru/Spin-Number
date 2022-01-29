var divsec = document.createElement("div");
var spansec = document.createElement("span");
var spansectext = 0;
var spinnner = document.getElementById("spinnner");
var spinnnerValue = document.getElementById("spinValueText");

var spinnnerBarCount = 20;
var y = 1;
var spinnnerBarDeg = 360 / spinnnerBarCount;
var spinnnerBarsDeg = 0;
var gradientPresentage = 0;
var gradientPresentageSec = 0;
var gradientPresentageColor = "";
var gradientPresentageColorStyle = "";
var gradientCount = 0;
var bgSection = document.createElement("div");
bgSection.classList.add("background-section");
spinnner.appendChild(bgSection);

for (var i = spinnnerBarCount; i > 0; i--) {
  gradientPresentage = 100 / spinnnerBarCount;
  gradientPresentageSec = gradientPresentageSec + gradientPresentage;
  gradientCount++;
  if (spinnnerBarCount % 2 === 0) {
    if (gradientCount === 2) {
      gradientPresentageColor = "red 0 " + gradientPresentageSec + "%,";
    } else {
      gradientPresentageColor = "black 0 " + gradientPresentageSec + "%,";
      gradientCount = 1;
    }
  } else {
    if (gradientCount === 3) {
      gradientPresentageColor = "red 0 " + gradientPresentageSec + "%,";
    } else if (gradientCount === 2) {
      gradientPresentageColor = "black 0 " + gradientPresentageSec + "%,";
    } else {
      gradientCount = 1;
      gradientPresentageColor = "green 0 " + gradientPresentageSec + "%,";
    }
  }
  gradientPresentageColorStyle =
    gradientPresentageColorStyle + gradientPresentageColor;
  bgSection.style.background =
    "conic-gradient(" + gradientPresentageColorStyle + " red 0)";
}

for (i = 0; i < spinnnerBarCount; i++) {
  divsec = document.createElement("div");
  spansec = document.createElement("span");
  spansectext = document.createTextNode(i + 1);
  divsec.classList.add("spin-bar");
  spansec.appendChild(spansectext);
  divsec.appendChild(spansec);
  spinnner.appendChild(divsec);
  spinnnerBarDeg = parseInt(spinnnerBarDeg);
  spinnnerBarsDeg = spinnnerBarDeg * i;
  bgSection.style.transform = "rotate(" + spinnnerBarsDeg / 2 + "deg)";
  spinnnerBarsDeg = "rotate(-" + spinnnerBarsDeg + "deg)";
  divsec.style.transform = spinnnerBarsDeg;
}

document.getElementById("spin").addEventListener("click", spinning);

function spinning() {
  spinnnerValue.classList.remove("ShowValue");
  var x = Math.floor(Math.random() * spinnnerBarCount + 1);
  var deg = 0;
  if (y % 2 === 0) {
    deg = x * spinnnerBarDeg + 1080 - spinnnerBarDeg;
  } else {
    deg = x * spinnnerBarDeg - 1080 - spinnnerBarDeg;
  }
  deg = "rotate(" + deg + "deg)";
  spinnner.style.transform = deg;
  y++;
  setTimeout(function () {
    spinnnerValue.innerHTML = x;
    spinnnerValue.className = "ShowValue";
  }, 2400);
}
