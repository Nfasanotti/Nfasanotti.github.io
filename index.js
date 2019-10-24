

let src="https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"
$(document).ready(function(){
    $("#Original").hide();
    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();
    $("#ButtonA").hide();
    $("#ButtonB").hide();
    $("#ButtonC").hide();
    $("#ButtonD").hide();
    $('#NameEntered').click(function(){
        var Name=$('#UserName').val();
        console.log($("#UserName"))
        if(Name!=null){
            $("#message").text("Hi " +Name+ "! Press the button to try the quiz");
        }
    })

QuestionNum=0
$("#Start").click(function(){
    if (QuestionNum<10) {
        $.get(src, function(data){
            let CorrectAns=(data.results[QuestionNum].correct_answer);
            let IncorrectAns=(data.results[QuestionNum].incorrect_answers);
         $("#Question").html(data.results[QuestionNum].question);
         let Ans=IncorrectAns;
         Ans.push(CorrectAns)
         Ans.join(", ")
        //  var ArrayAns=jQuery.makeArray(Ans);
         console.log(Ans)
         $("div").text(Ans)
         $("#Question").show();
         $("label").show();
         $("button").show();
         QuestionNum+=1    
        })
    }
})
})





