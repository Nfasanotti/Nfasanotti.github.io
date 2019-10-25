

let src="https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"
$(document).ready(function(){
    $("#Original").hide();
    $("Button").hide();
    $('#NameEntered').click(function(){
        var Name=$('#UserName').val();
        console.log($("#UserName"))
        if(Name!=null){
            $("#message").text("Hi " +Name+ "! Press the button to try the quiz");
        }
    $("#Start").show()
    })
function quiz(){
    QuestionNum=0
    Score=0
    $.get(src, function(data){
    $("#Start").click(function(){
     function reset(){
         $("#ButtonA").css({"background-color":"lightgray"})
         $("#ButtonB").css({"background-color":"lightgray"})
         $("#ButtonC").css({"background-color":"lightgray"})
         $("#ButtonD").css({"background-color":"lightgray"})
     }
     reset()
     function undo(){
         $("#ButtonA").unbind()
         $("#ButtonB").unbind()
         $("#ButtonC").unbind()
         $("#ButtonD").unbind()

     }
     if (QuestionNum<10) {
             let CorrectAns=(data.results[QuestionNum].correct_answer);
             let IncorrectAns=(data.results[QuestionNum].incorrect_answers);
             $("#Question").html(data.results[QuestionNum].question);
             let Ans=IncorrectAns;
             Ans.push(CorrectAns);
             console.log(Ans);
            Ans.sort()
             $("#display_ans").html (Ans.join(",  "));
             $("#Question").show();
             $("label").show();
             $("button").show();
                 $("#ButtonA").click(function(){
                     reset()
                    if (Ans[0]==CorrectAns){
                       $("#ButtonA").css({"background-color":"#4aff03"}) 
                      Score+=1
                     }else{
                         $("#ButtonA").css({"background-color":"#ff0303"})
                 }
                 undo()
              })
                 $("#ButtonB").click(function(){
                  reset()
                     if (Ans[1]==CorrectAns){
                      $("#ButtonB").css({"background-color":"#4aff03"}) 
                         Score+=1
                     }else{
                         $("#ButtonB").css({"background-color":"#ff0303"})
                     }
              undo()
          })
                 $("#ButtonC").click(function(){
                 reset()
                 if (Ans[2]==CorrectAns){
                   $("#ButtonC").css({"background-color":"#4aff03"}) 
                  Score+=1
                 }else{
                     $("#ButtonC").css({"background-color":"#ff0303"})
                 }
                 undo()
                })
             $("#ButtonD").click(function(){
                 reset()
                 if (Ans[3]==CorrectAns){
                   $("#ButtonD").css({"background-color":"#4aff03"}) 
                   Score+=1
                 }else{
                  $("#ButtonD").css({"background-color":"#ff0303"})
              }
              undo()
             })        
          QuestionNum+=1 
     }
     else{
          $("#final_score").text("Your final score is: "+Score)
          $("#redo").show()
        }
         })
    })
    }
    quiz()
    $("redo").click(function(){
       quiz()
    })
    })







