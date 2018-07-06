var arr = [1, 5, 7, 2, 3, 10, 20, 4, 9, 8];


function printarr() {
   document.getElementById("result").innerHTML = "<p>"+ arr +"</p>";
}
function check(value){
  var check = true;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (value == i) {
      check = true;
    } else {
      check = false;
    }

  }
}
function max(){
  var max = arr[0];
  for (var i = 1; i <= arr.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

  }
  return max;
}

function sum(){
  var sum = 0;
    for (var i = 1; i <= arr.length - 1; i++) {
    sum += arr[i]
  }
  return sum;
}

function sortar(){
  arr.sort(function(a, b){
    return b - a
  })
}

function sub() {
   var ip = document.getElementById("ip").value;
    switch(ip){
      case "1":
        printarr();
        break;
      case "2":
          var value = prompt("Search value: ");
          if(check(value)) {
            document.getElementById("result").innerHTML = "<p> Exist </p>";
          } else {
            document.getElementById("result").innerHTML = "<p> Not Exist </p>";
          }
        break;
      case "3":
        document.getElementById("result").innerHTML = "<p>Max value: "+ max() +"</p>";
        break;
      case "4":
        document.getElementById("result").innerHTML = "<p>Sum: "+ sum() +"</p>";
        break;
      case "5":
      sortar();
        document.getElementById("result").innerHTML = "<p>Sort: "+ arr +"</p>";
        break;
      default:
        document.getElementById("result").innerHTML = "<p>Wrong!</p>";
    }

}



