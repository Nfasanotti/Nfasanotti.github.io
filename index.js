


/*var UserName=$(":input");
$('#HiMessage').text("Hi "+UserName+" ! Press the button to try the quiz")

var UserName=prompt('Please enter your name below', "Stranger");
if (UserName!=null){
$("#UserName").innerHTML="Hi " +UserName+ "! Press the button to try the quiz";
}   
*/
$(document).ready(function(){
    $('#NameEntered').click(function(){
        var Name=$('#UserName').val();
        if(Name!=null){
            alert("Hi " +UserName+ "! Press the button to try the quiz");
        }
    })
})
