var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var btn = document.querySelector("button");
var output = document.querySelector(".result");

function calculatesum(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

btn.addEventListener("click", function () {
var ang1 = Number(angle1.value);
var ang2 =  Number(angle2.value) ;
var ang3 =  Number(angle3.value);
if(ang1<=0 || ang2 <= 0 || ang3<= 0){
    output.innerHTML= "please Enter valid numbers, Which should be greater than 0"
}
else{
const sum = calculatesum();
    if (sum === 180) {
        output.innerHTML = "Yes yes yes it is a triangle. Sum of all angles is "+sum ;
    }
    else if(sum < 180){
        output.innerHTML = "No no no, these angles cannot make a Triangle . Sum of all angles is "+sum +" which is less than 180 degrees"
    }
    else{
        output.innerHTML = "No no no, these angles cannot make a Triangle . Sum of all angles is "+sum +" which is greater than 180 degrees"
    }
}

})
