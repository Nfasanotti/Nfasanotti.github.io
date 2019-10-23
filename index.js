

$(document).ready(function(){
    $('#NameEntered').click(function(){
        var Name=$('#UserName').val();
        console.log($("#UserName"))
        if(Name!=null){
            $("span").text("Hi " +Name+ "! Press the button to try the quiz");
        }
    })


$("#Start").click(function(){
    $("#Original").css("background-color",rgb(255,0,0))



    }
})
})



