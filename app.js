

function compute() {
  var kg
  var m
  var m2
  var bmi

  kg = document.getElementById("kg").value
  m = document.getElementById("m").value
  m2 = m*m

  bmi = kg/m2

  document.getElementById("out").innerHTML = bmi;
  
  return
}