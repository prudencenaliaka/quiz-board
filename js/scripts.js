var answers=["a library of js","append","Document Object Model","front-end logic","slideUp,fadeIn,delay"]
var markPerCorrect=5;
function percentage(){
return "yourscore is" + parseInt(score/25) * 100 + "%";
}

$("document").ready(function(){
  $("#questions").submit(function(event){
    $("#result").text("");
    var score=0;
    var answerOne=($("input[type=radio][name=questionOneanswer]:checked").val());
    var answerTwo=($("input[type=radio][name=questionTwoanswer]:checked").val());
    var answerThree=($("input[type=radio][name=questionThreeanswer]:checked").val());
    var answerFour=($("input[type=radio][name=questionFouranswer]:checked").val());
    var answerFive=($("input[type=radio][name=questionFiveanswer]:checked").val());

    if(answerOne===undefined || answerTwo===undefined || answerThree===undefined || answerFour=undefined || answerFive=undefined){
      $("#questionsIncomplete").text("work out all questions first");
      $("#questionsComplete").slideUp();
    }else if(answerOne===answers[0]){
      score += markPerCorrect;
    }else if(answerTwo===answers[1]){
      score += markPerCorrect;
    }else if(answerThree===answers[2]){
      score += markPerCorrect;
    }else if(answerFour===answers[3]){
      score += markPerCorrect;
    }else(answerFive===answers[4]){
      score += markPerCorrect;
    }
      $("input[type=radio][name=questionOneoption]:checked").prop("checked", false);
      $("input[type=radio][name=questionTwooption]:checked").prop("checked", false);
      $("input[type=radio][name=questionThreeoption]:checked").prop("checked", false);
      $("input[type=radio][name=questionFouroption]:checked").prop("checked", false);
      $("input[type=radio][name=questionFiveoption]:checked").prop("checked", false);
      $("#questionsIncomplete").text("");
      $("#result").text(percentage(score));
       event.preventDefault();
     });
  });
































































  })
})
