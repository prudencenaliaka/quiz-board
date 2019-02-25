var answers=["a library of js","append","Document Object Model","front-end logic","slideUp,fadeIn,delay"];
var scorePerCorrect=20;

$(document).ready(function(){
  $("#questions").submit(function(event){

    var score=0;
    var answerOne=($("input:radio[name=questionOneanswer]:checked").val());
    var answerTwo=($("input:radio[name=questionTwoanswer]:checked").val());
    var answerThree=($("input:radio[name=questionThreeanswer]:checked").val());
    var answerFour=($("input:radio[name=questionFouranswer]:checked").val());
    var answerFive=($("input:radio[name=questionFiveanswer]:checked").val());

    if(answerOne===undefined || answerTwo===undefined || answerThree===undefined || answerFour===undefined || answerFive===undefined){
    $("#questionsIncomplete").text("work out all questions first");
    $("#questionsIncomplete").slideUp(2000);


      }
    else{
       if(answerOne===answers[0]){
    score += scorePerCorrect;}
       if(answerTwo===answers[1]){
    score += scorePerCorrect;}
       if(answerThree===answers[2]){
    score += scorePerCorrect;}
       if(answerFour===answers[3]){
    score += scorePerCorrect;}
       if(answerFive===answers[4]){
    score += scorePerCorrect;}

    $("#questionsIncomplete").text("");
    $("#result").text(percentage(score));

    }
    function percentage(score){
    return "yourscore is " + (score) + "%";
    }

       event.preventDefault();

     });
  });
