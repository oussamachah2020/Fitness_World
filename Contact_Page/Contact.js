
function Thanks() {
    let msg_1 = "Enter your informations!";
    let msg_2 = "Thank you for choosing Us, we will replay sooner!";

    var FirstInput  = document.getElementById('email').value;
    var SecondInput = document.getElementById('Message').value;
    var ThirdInput  = document.getElementById('Subject').value;

    if(FirstInput  == "" && SecondInput == "" && ThirdInput == "") {
        alert(msg_1);
        return false;
    }else {
        document.getElementById('TH').innerHTML = msg_2;
        document.getElementById('email').value = "";
        document.getElementById('Message').value = "";
        document.getElementById('Subject').value = "";
        document.getElementById('Phone').value = "";
        document.getElementById('name').value = "";
        document.getElementById('button').remove();
        return true;
    }
}