var email = "shrutidhanani59@gmail.com";
var password = "123456789";

document.querySelector('form').onsubmit = function (event) 
{
    event.preventDefault();

    if (document.querySelectorAll("input")[0].value === email) {
        if (document.querySelectorAll("input")[1].value === password) {
            // alert("Login Successfully");
            location.href = "mainPage.html";
        }
        else {
            alert("Password is worng");
        }
    }
    else {
        alert("email is worng");
    }
}
