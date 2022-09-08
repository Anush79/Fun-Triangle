var formForQuiz = document.querySelector(".quiz");
var submitbtn = document.querySelector("#submit");
var output = document.querySelector(".result");
var input = document.querySelectorAll("input");
var resetbtn = document.querySelector(".reset");
var correctAnswer = document.getElementsByClassName('correctanswer');

var radiobuttons = [];
var unchecked = false;
var questionArr = [
  "Question 1 = ",
  "Question 2 = ",
  "Question 3 = ",
  "Question 4 = ",
  "Question 5 = ",
  "Question 6 = ",
  "Question 7 = ",
  "Question 8 = ",
  "Question 9 = ",
  "Question 10 = ",
];
const rightAnswers = [
  "RightAngled",
  "Acute",
  "180 degrees",
  "2 congruent sides",
  "a + b + c",
  "Equilateral triangle",
  "Obtuse",
  "5,7,10",
  "45 degrees",
  "98°, 42°, 90°",
];


function ifAllRadiosChecked() {

    for (var index = 0; index < 30; index++) {
        if (input[index].type == "radio") {
          radiobuttons.push(input[index]);
        }
      }
    
      for (var x = 0; x < radiobuttons.length; x = x + 3) {
        if (
          !(
            radiobuttons[x].checked ||
            radiobuttons[x + 1].checked ||
            radiobuttons[x + 2].checked
          )
        ){
          output.innerText =
            "There is no negetive marking, so kindly answer all questions before submitting.";
        unchecked = true;
        formForQuiz.reset();
        
    }console.log("checking is done");
    output.innerText = unchecked;
        break;
      }
      return unchecked;

}


function calculateFinalScore() {
  let score = 0;

var test=  ifAllRadiosChecked();
console.log(test);
  if (test === true) {
    
  // const formData = new FormData(formForQuiz);
  //   for (var value of formData.values()) {
  //     if (value === rightAnswers[i]) {
  //       score = score + 1;
  //       console.log("right answer " + value);
  //     }
  //     i++;
  //   }
  //   output.innerText = "Your final score is " + score + " / 10";

  if (unchecked === false) {

    for (var i = 0; i < radiobuttons.length; i += 3) {
        if (radiobuttons[i].checked === rightAnswers[i])
            score=score+1;
    }output.innerText = radiobuttons;
    
}


    
    for(var x = 0; x < 10; x++){
      correctAnswer.innerText = questionArr[x],rightAnswers[x];
      correctAnswer.innerHTML = "<br>"
      console.log("blaj");
    }

  }
}

submitbtn.addEventListener("click", calculateFinalScore);

resetbtn.addEventListener("click", function(){
  formForQuiz.reset();
});