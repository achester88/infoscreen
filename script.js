
function updateClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ':' + m + ':' + s;
  console.log("test");
  setTimeout(updateClock, 1000);
}

function checkTime(n) {
  if (n < 10) {
    n = "0" + n;
  }
  return n;
}

const elem = document;
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}


updateClock();
