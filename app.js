var mil = 0;
var sec = 0;
var min = 0;

function time() {
  mil++;
  if (mil > 99) {
    sec++;
    mil = 0;
    document.getElementById("sample").innerHTML = min + ":" + sec + ":" + mil;
  } else if (sec > 59) {
    min++;
    sec = 0;
    document.getElementById("sample").innerHTML = min + ":" + sec + ":" + mil;
  }
  document.getElementById("sample").innerHTML = min + ":" + sec + ":" + mil;
  if (sec < 10) {
    document.getElementById("sample").innerHTML = min + ":0" + sec + ":" + mil;
    if (mil < 10) {
      document.getElementById("sample").innerHTML =
        min + ":0" + sec + ":0" + mil;
    }
  } else if (sec > 10) {
    if (mil < 10) {
      document.getElementById("sample").innerHTML =
        min + ":" + sec + ":0" + mil;
    }
  } else
    document.getElementById("sample").innerHTML = min + ":" + sec + ":" + mil;
}

var a;

function start() {
  a = setInterval(time, 10);
}

function stop() {
  clearInterval(a);
}
function reset() {
  clearInterval(a);
  mil = 0;
  min = 0;
  sec = 0;
  document.getElementById("sample").innerHTML =
    "0" + min + ":0" + sec + ":0" + mil;
}
