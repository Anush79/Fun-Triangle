var side1 = document.querySelector(".side1");
var side2 = document.querySelector(".side2");
var side3 = document.querySelector(".side3");
var btn = document.querySelector("#submit");
var output = document.querySelector(".result");
var resetbtn = document.querySelector(".reset");

resetbtn.addEventListener("click", function(){
    document.getElementById("myForm").reset();
});

function calcPmeter(ab, bc, ac) {
  var perimeter = ab + bc + ac;
  var semiPerimeter = perimeter / 2;
  return semiPerimeter;
}
function productOfDifferences(sperimeter, ab, bc, ac) {
  var x, y, z, product;
  x = sperimeter - ab;
  y = sperimeter - bc;
  z = sperimeter - ac;
  product = x * y * z;
  return product;
}
function finalCalc(sperimeter, product) {
  var toRoot = sperimeter * product;
  var area = Math.sqrt(toRoot);
  return area;
}

function calculateArea(ab, bc, ac) {
  var sperimeter = calcPmeter(ab, bc, ac);
  var product = productOfDifferences(sperimeter, ab, bc, ac);
  var area = finalCalc(sperimeter, product);

  output.innerText =
    "The Area of given Triangle using Herons Formula is  " +
    area.toFixed(3) +
    " Sq units";
}

btn.addEventListener("click", function () {

var firstSide = Number(side1.value);
var secondSide = Number(side2.value);
var thirdSide = Number(side3.value);

  if (
    firstSide + secondSide > thirdSide &&
    secondSide + thirdSide > firstSide &&
    firstSide + thirdSide > secondSide
  ) {
    calculateArea(
      firstSide,
      secondSide,
      thirdSide
    );
  } else {
    output.innerText = "Please enter valid side lengths";
  }
});

