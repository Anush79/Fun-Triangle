var formForQuiz = document.querySelector(".quiz");
var submitbtn = document.querySelector("button");
var output = document.querySelector(".result");
const rightAnswers = ["RightAngled", "Acute", "180 degrees", "2 congruent sides","a + b + c","Equilateral triangle","Obtuse","5,7,10","45 degrees","98°, 42°, 90°"]

function calculateFinalScore() {
    let score = 0;
    let i = 0;
    const formData = new FormData(formForQuiz);
    for (var value of formData.values()) {
        if (value === rightAnswers[i]) {
            score = score + 1; 
            console.log("right answer " + value)
        } i++;
    }
    output.innerText = "Your final score is " + score + " / 10";


}


submitbtn.addEventListener('click', calculateFinalScore);
