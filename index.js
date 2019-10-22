var UserName=prompt('Please enter your name below', "Stranger");
if (UserName!=null){
$("#UserName").innerHTML="Hi " +UserName+ "! Press the button to try the quiz";
}   

$(document).ready(function(){
    $('#NameState').hide();
$("#Button1").click(ButtonClicked(){
    $('#NameState').show();
})
function ChooseColour(){
    let Red=Math.floor(Math.random()*(256-0+1));
    let Green=Math.floor(Math.random()*(256-0+1));
    let Blue=Math.floor(Math.random()*(256-0+1));
    return(rgb(Red,Green,Blue))
}
let CorrectColour=ChooseColour()
$("#Original").style.backgroundColor="red"
})