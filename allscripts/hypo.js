var base = document.querySelector(".base");
var height = document.querySelector(".height");
var btn = document.querySelector("#hypo");
var outputhypo = document.querySelector(".result");

btn.addEventListener("click", function(){
    
    const a= Number(base.value);
    const b= Number(height.value);
    if(a!=0 && b!=0 ){
    var hypo= Math.sqrt(a*a + b*b)
    outputhypo.innerText="Hypotenuse of the Given Triangle is "+hypo.toFixed(2)+" units"
    }
    else{
        outputhypo.innerText="Attention: Value of base and Perpendicular should not be 0"
    }

})
