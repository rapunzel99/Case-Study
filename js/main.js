const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent=this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent=this.parentNode.parentNode;
    parent.classList.remove('focus');
}

inputs.forEach(input =>{
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

// form validation --->
function validates(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    // formconfirm function call
    formconfirm(username,password,callback);
}
// formconfirm function definition
function formconfirm(username,password,callback){
    var msg = document.getElementById("msg");
    if (username == "admin" && password == "12345"){
        msg.innerHTML = "Logged In Successfully!!!";
        // callback function call
        callback();
    }
    else{
        msg.innerHTML = "Invalid LogIn!!!";
    }
}
// callback function definition
function callback(){
    var direct = document.getElementById("loginform");
    direct.setAttribute("action","home.html");
}