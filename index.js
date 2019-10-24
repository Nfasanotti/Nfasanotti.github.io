

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
            $("span").text("Hi " +Name+ "! Press the button to try the quiz");
        }
    })

QuestionNum=0
$("#Start").click(function(){
    $.get(src, function(data){
        $("#Question").text(data.results[QuestionNum].question);
        var Answers=[$("#Answers").text(data.results[QuestionNum].correct_answer)];
        Answers+=[$("#Answers").text(data.results[QuestionNum].incorrect_answer)];
        console.log(Answers)
        $("#Question").show();
        $("label").show();
        $("button").show();
    
    })
})
})




