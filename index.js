

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
         Ans.push(CorrectAns);
         console.log(Ans)


         $("#display_ans").html(Ans);
         $("#Question").show();
         $("label").show();
         $("button").show();
         QuestionNum+=1    
 //        Ans=shuffle(Ans);
 //        Ans=Ans.join(",  ");
         })
        //  Ans.join("     ");
//         var i;
        //  for(i=0; i<Ans.length; i++){
        //     $("#display_ans").html(Ans[i])
        //     console.log(Ans[i]+"  ")
    }


        })
})






