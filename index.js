

let src="https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"
$(document).ready(function(){
    $("#Original").hide();
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
        $("#Question").text(data.results[QuestionNum].questions)
                
        $("#Question").show()
    
    })
})
})




