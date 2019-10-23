


$(document).ready(function(){
    $("#Original").hide();
    $('#NameEntered').click(function(){
        var Name=$('#UserName').val();
        console.log($("#UserName"))
        if(Name!=null){
            $("#Welcome").text("Hi " +Name+ "! Press the button to try the quiz");
        }
    })


$("#Start").click(function(){
    $("#Original").show()
    $.get("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium", function(data){
    //   $("#Quiz").text(data)
    })





    // $.ajax(settings).done(function(response){
    //     console.log(response);
    //     console.log("question")
    })



    // $.getJSON("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"), function(json){
        // let quiz=("json")
        // $("span").text(quiz)
    // }
//})
})



