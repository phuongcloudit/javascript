

function sub() {
  arr = [];
  var name = document.getElementById("name").value;
  arr.push(name);
  document.getElementById("result").innerHTML = "<p> Array name of user: " + arr + "<p>"
}


function sortar() {
  document.getElementById("result").innerHTML = "<p> Sort: " + arr.sort() + "<p>"
}
