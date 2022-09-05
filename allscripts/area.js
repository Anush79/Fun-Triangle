var side1 = document.querySelector(".side1");
var side2 = document.querySelector(".side2");
var side3 = document.querySelector(".side3");
var btn = document.querySelector("button");
var output = document.querySelector(".result");

function calcPmeter(ab, bc, ac) {
    var perimeter = ab + bc + ac;
    var semiPerimeter = perimeter / 2
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

    output.innerText = "The Area of given Triangle using Herons Formula is  " + area.toFixed(3) + " Sq units";
}

btn.addEventListener("click", function () {
    if(Number(side1.value)+Number(side2.value)>Number(side3.value) && Number(side2.value)+Number(side3.value)>Number(side1.value) && Number(side1.value)+Number(side3.value)>Number(side2.value)){
        calculateArea(Number(side1.value), Number(side2.value), Number(side3.value));}
        else{output.innerText ="Please enter valid side lengths"}
    }

    
    )
