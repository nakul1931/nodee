function create(){
    var firstName = document.getElementById("fn").value;
    var lastName = document.getElementById("ln").value;
    var email = document.getElementById("email").value;
    var userId = document.getElementById("ui").value;
    var pass = document.getElementById("pass").value;
    var cf = document.getElementById("cf").value;
    console.log(firstName,lastName,email,pass,cf,userId);
    if(firstName == "")
    {
        document.getElementById("r0").innerHTML = "Please Enter Your First name";
    }
    else
    {
        document.getElementById("r0").innerHTML = "OK!OK!"
    }
    if(lastName == "")
    {
        document.getElementById("r1").innerHTML = "Please Enter Your Last name";
    
    }
    else
    {
        document.getElementById("r1").innerHTML = "OK!OK!"
    }
    var exp = /[A-Za-z0-9!#$%^.&*][@][A-Za-z0-9!#$%^&*]+(.com)/;
    if(email == "")
    {
        document.getElementById("r2").innerHTML = "Please Enter Your Email first";
    }
    else if(!email.match(exp))
    {
        document.getElementById("r2").innerHTML = "Enter the right email";
    }
    else
    {
        document.getElementById("r2").innerHTML = "OK!OK!";
    }
}