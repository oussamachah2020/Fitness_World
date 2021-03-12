
function Message() {
    let msg = "Thanks for choosing Us, you will recieve notification about our website's updates!";
    var required = "Enter your email!";
    var Input = document.getElementById('email').value;
 
    if(Input == "") {
        document.getElementById('required').innerText = required;
        return false;
    }else { 
        document.getElementById('Message').innerText = msg;
        document.getElementById('required').remove();
        document.getElementById('input').remove();
        return true;
    }
}