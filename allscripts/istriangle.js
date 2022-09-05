var ang1 = document.querySelector("#angle1");
var ang2 = document.querySelector("#angle2");
var ang3 = document.querySelector("#angle3");
var btn = document.querySelector("button");
var output = document.querySelector(".result");

function calculatesum(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

btn.addEventListener("click", function () {
const sum = calculatesum(Number(ang1.value), Number(ang2.value) , Number(ang3.value));
    if (sum === 180) {
        output.innerHTML = "Yes yes yes it is a triangle. Sum of all angles is "+sum ;
    }
    else if(sum < 180){
        output.innerHTML = "No no no, these angles cannot make a Triangle . Sum of all angles is "+sum +" which is less than 180 degrees"
    }
    else{
        output.innerHTML = "No no no, these angles cannot make a Triangle . Sum of all angles is "+sum +" which is greater than 180 degrees"
    }

})
