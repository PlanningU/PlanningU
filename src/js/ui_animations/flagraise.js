function myMove() {
  var elem = document.getElementById("flag");
  var btn = document.getElementById("raise");
  var ge = document.getElementById("guoge");
  elem.classList.toggle('hidden');
  btn.classList.toggle('hidden');
  var pos = 1300;
  ge.play();
  var id = setInterval(frame, 37.35);
  function frame() {
    if (pos == 15) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
    }
  }
}

