

src="https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"
$(document).ready(function(){
    $("#Original").hide();
    $('#NameEntered').click(function(){
        var Name=$('#UserName').val();
        console.log($("#UserName"))
        if(Name!=null){
            $("span").text("Hi " +Name+ "! Press the button to try the quiz");
        }
    })


$("#Start").click(function(){
    $("#Original").show()
    var api_Url="https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"
    alert(api_Url)
    $.ajax({
        url: api_Url,
        data: data,
        dataType:'json',
        success: function(result){
            console.log(esult)
        }
    })

/*    $.get("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium", function(data){
    alert(data)
*/    })





    // $.ajax(settings).done(function(response){
    //     console.log(response);
    //     console.log("question")
    })



    // $.getJSON("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"), function(json){
        // let quiz=("json")
        // $("span").text(quiz)
    // }
//})
// })



