

$(document).ready(function(){
    $('#NameEntered').click(function(){
        var Name=$('#UserName').val();
        console.log($("#UserName"))
        if(Name!=null){
            alert("Hi " +Name+ "! Press the button to try the quiz");
        }
    })

function ChooseColour(){
    let Red=Math.floor(Math.random()*(256-0+1));
    let Green=Math.floor(Math.random()*(256-0+1));
    let Blue=Math.floor(Math.random()*(256-0+1));
    return(rgb(Red,Green,Blue))
}

$("#Start").click(function(){
    $("#Original").css("background-color","rgb(ChooseColour()");
})

$.getJSON("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium"), function(json){
    console.log(json);
}

})

})


