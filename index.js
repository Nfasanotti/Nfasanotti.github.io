

$(document).ready(function(){
    $('#NameEntered').click(function(){
        var Name=$('#UserName').val();
        console.log($("#UserName"))
        if(Name!=null){
            alert("Hi " +Name+ "! Press the button to try the quiz");
        }
    })


$("#Start").click(function(){
    $.getJSON("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"), function(json){
        console.log(json);
    }
})
})



