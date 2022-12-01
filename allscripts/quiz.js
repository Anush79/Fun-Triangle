var formForQuiz = document.querySelector(".quiz");
var submitbtn = document.querySelector("#submit");
var output = document.querySelector(".result");
var input = document.querySelectorAll("input");
var resetbtn = document.querySelector(".reset");
var correctAnswer = document.querySelector(".correctanswer");

var radiobuttons = [];
var unchecked = false;

correctAnswer.style.display = "none";
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
    ) {
      output.innerText =
        "There is no negetive marking, so kindly answer all questions before submitting.";
      unchecked = true;
    } else unchecked = false;
    console.log("Just checking ");
  }
  return unchecked;
}

function calculateFinalScore() {
  let score = 0;
  var i = 0;
  ifAllRadiosChecked();

  if (unchecked === false) {
    const formData = new FormData(formForQuiz);
    for (var value of formData.values()) {
      if (value === rightAnswers[i]) {
        score = score + 1;
        console.log("right answer " + value);
      }
      i++;
    }
    output.innerText = "Your final score is " + score + " / 10";
    correctAnswer.style.display = "block";
  }
}

submitbtn.addEventListener("click", calculateFinalScore);

resetbtn.addEventListener("click", function () {
  formForQuiz.reset();
  output.innerText="";
   correctAnswer.style.display = "none";
});
