

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
Score=0
$("#Start").click(function(){
    $("#ButtonA").css({"background-color":"lightgray"})
    $("#ButtonB").css({"background-color":"lightgray"})
    $("#ButtonC").css({"background-color":"lightgray"})
    $("#ButtonD").css({"background-color":"lightgray"})
    if (QuestionNum<10) {
        $.get(src, function(data){
            let CorrectAns=(data.results[QuestionNum].correct_answer);
            let IncorrectAns=(data.results[QuestionNum].incorrect_answers);
         $("#Question").html(data.results[QuestionNum].question);
         let Ans=IncorrectAns;
         Ans.push(CorrectAns);
         console.log(Ans);
         Ans.sort()
         Ans.join(",   ")

         $("#display_ans").html(Ans);
         $("#Question").show();
         $("label").show();
         $("button").show();
         QuestionNum+=1 
         $("#ButtonA").click(function(){
             if (Ans[0]==CorrectAns){
                $("#ButtonA").css({"background-color":"#4aff03"}) 
                Score+=1
             }else{
                 $("#ButtonA").css({"background-color":"#ff0303"})
                 return;
             }
         })
         $("#ButtonB").click(function(){
            if (Ans[1]==CorrectAns){
               $("#ButtonB").css({"background-color":"#4aff03"}) 
               Score+=1
            }else{
                $("#ButtonB").css({"background-color":"#ff0303"})
                return;
            }
        })
        $("#ButtonC").click(function(){
            if (Ans[2]==CorrectAns){
               $("#ButtonC").css({"background-color":"#4aff03"}) 
               Score+=1
            }else{
                $("#ButtonC").css({"background-color":"#ff0303"})
                return;
            }
        })
        $("#ButtonD").click(function(){
            if (Ans[3]==CorrectAns){
               $("#ButtonD").css({"background-color":"#4aff03"}) 
               Score+=1
            }else{
                $("#ButtonD").css({"background-color":"#ff0303"})
                return;
            }
        })        
         })
    }
    else{
        $("#final_score").text("Your final score is: "+Score)
    }


        })
})






