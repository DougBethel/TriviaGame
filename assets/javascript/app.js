
// countdown timer
var seconds = 120;
// Answer Totals
var correct = 0;
var wrong = 0;
var unanswered = 0;
var quiz = $('#gameContent');
var results = $('#resultsContainer');
var submit = $('#finishButton');
var start = $('#startButton');

$(document).ready( function(){

function buildQuiz (){
var output = [];
for (var i = 0; i < myQuesitons.length; i++) {
  $('#gameContent').text(myQuesitons)[i]
}



function showResults (){}
// start Quiz with on click function
$('start').on('click', function() {
buildQuiz();
});
// show results on final click
$(results).on('click', function(){
showResults();
});

var myQuestions = [
  {
    question: "Which Peanuts character is an aspiring concert pianist?",
    answers: {
      a: "Linus",
      b: "Schroeder",
      c: "Pig-Pen",
      d: "Franklin"
    },
    correctAnswer: "b"
  },
  {
    question: "Who is Snoopys animal partner in crime?",
    answers: {
      a: "Charlie Brown",
      b: "Peppermint Patty",
      c: "Woodstock",
      d: "Pig-Pen"
    },
    correctAnswer: "c"
  },
  {
    question: "In A Charlie Brown Christmas, what community service does Lucy only charge a nickel for?",
    answers: {
      a: "Psychiatry",
      b: "Vetinary",
      c: "Teaching Ice Skating",
      d: "Providing Schroeder Music Lessons"
    },
    correctAnswer: "a"
  },
  {
  question: "Which Charecter is famously known for their trusty blanket?",
  answers: {
    a: "Snoopy",
    b: "Marcie",
    c: "Sally",
    d: "Linus"
  },
  correctAnswer: "d"
},

]

});
