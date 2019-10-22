var UserName=prompt('Please enter your name below', "Stranger");
if (UserName!=null){
$("#UserName").innerHTML="Hi " +UserName+ "! Press the button to try the quiz";
}   

$(document).ready(function(){
$("#Button1").click(ButtonClicked(){
    console.log("It's time to test how well you know your colours");
})
}
function ChooseColour(){
    let Red=Math.floor(Math.random()*(256-0+1));
    let Green=Math.floor(Math.random()*(256-0+1));
    let Blue=Math.floor(Math.random()*(256-0+1));
    return(rgb(Red,Green,Blue))
}
let CorrectColour=ChooseColour()
$("#Original").style.backgroundColor="red"
})