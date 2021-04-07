var container1 = document.querySelector(".container1");
// 1st form selector
var form1 = document.getElementById('form1');
var email = document.getElementById("email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var next1 = document.getElementById('next1');
var back1 = document.getElementById('back1');
var form2 = document.getElementById('form2');
var emailValue = email.value;
// 2nd form selector 
var form3 = document.getElementById('form3');
var next2 = document.getElementById('next2');
var back2 = document.getElementById('back2');
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link1Value = link1.value;
var link2Value = link2.value;
var link3Value = link3.value;
// 3rd form selector
var form4 = document.getElementById("form4");
var submit1 = document.getElementById("submit");
var fristName = document.getElementById("fristName");
var lastName = document.getElementById("lastName");
var mobileNo = document.getElementById("mobileNo");
var fristNameValue = fristName.value;
var mobileNoValue = mobileNo.value;
// 4rh form selector
var mainForm = document.querySelector("form");
var logingEmail = document.getElementById("logingEmail");
var logingpassword = document.getElementById("logingpassword");
var logingBtn = document.getElementById("logingBtn");
var container2 = document.querySelector(".container2");
//error handelar
var errorEmail = document.getElementById("errorEmail");
var errorPassword1 = document.getElementById("errorPassword1");
var errorPassword2 = document.getElementById("errorPassword2");
var errorFristName = document.getElementById("errorFristName");
var errorLastName = document.getElementById("errorLastName");
var errorMobileNo = document.getElementById("errorMobileNo");
var errorlogingEmail = document.getElementById("errorlogingEmail");
var errorlogingpassword = document.getElementById("errorlogingpassword");
// progress
var stepRow = document.querySelector(".step-row");
var progress = document.getElementById('progress');
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
// store information
var store = {
    storeEmail: "",
    storePassword: "",
    storeEmail: "",
    storeLink1: "",
    storeLink2: "",
    storeLink3: "",
    storeFristName: "",
    storeLastName: "",
    storeMobileNO: "",
}
//  1st form function
next1.onclick = function () {
    stepNext1();
}
back1.onclick = function () {
    fristForm();
}
// 2nd form function
next2.onclick = function () {
    stepNext2();
}
back2.onclick = function () {
    secondForm();
}
//3rd form function 
submit1.onclick = function () {
    stepNext3();
}
// step
step1.onclick = function () {
    fristForm();
}
step2.onclick = function () {
    secondForm();
}
step3.onclick = function () {
    thirdForm();
}
//loging
logingBtn.onclick = function () {
    stepLoging();
}

// function
function stepNext1() {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        errorEmail.innerHTML = "Email isn't valid";
        $("#email").css('border-bottom', '1px solid red').focus();
    } else {
        $("#email").css('border-bottom', '1px solid #999');
        errorEmail.innerHTML = "";
        if (password1.value.length > 7) {
            $("#password1").css('border-bottom', '1px solid #999');
            errorPassword1.innerHTML = "";
            if (password1.value === password2.value) {
                $("#password2").css('border-bottom', '1px solid #999');
                errorPassword2.innerHTML = "";
                secondForm();
                store.storeEmail = email.value;
                store.storePassword = password1.value;
            } else {
                errorPassword2.innerHTML = "Password not match";
                $("#password2").css('border-bottom', '1px solid red').focus();
            }
        } else {
            if (password1.value.length < 1) {
                errorPassword1.innerHTML = "required";
                $("#password1").css('border-bottom', '1px solid red').focus();
            } else {
                errorPassword1.innerHTML = "Minimam 8 charater";
                $("#password1").css('border-bottom', '1px solid red').focus();
            }

        }


    }
}

function stepNext2() {
    thirdForm();
    if (link1.value.length > 0) {
        store.storeLink1 = link1.value;
    } else {
        store.storeLink1 = "You not gave this link";
    }
    if (link2.value.length > 0) {
        store.storeLink2 = link2.value;
    } else {
        store.storeLink2 = "You not gave this link";
    }
    if (link3.value.length > 0) {
        store.storeLink3 = link3.value;
    } else {
        store.storeLink3 = "You not gave this link";
    }
}

function stepNext3() {
    if (fristName.value.length > 0) {
        $("#fristName").css('border-bottom', '1px solid #999');
        errorFristName.innerHTML = "";
        if (lastName.value.length > 0) {
            $("#lastName").css('border-bottom', '1px solid #999');
            errorLastName.innerHTML = "";
            if (mobileNo.value.length > 0) {
                if (email.value.length > 1 && password1.value.length > 1) {
                    $("#mobileNo").css('border-bottom', '1px solid #999');
                    errorMobileNo.innerHTML = "";
                    mainForm.style.display = "none";
                    form4.style.left = "40px";
                    stepRow.style.display = "none";
                    store.storeFristName = fristName.value;
                    //last name store
                    store.storeLastName = lastName.value;
                    store.storeMobileNO = mobileNo.value;
                } else {
                    fristForm();
                    errorEmail.innerHTML = "required";
                    $("#email").css('border-bottom', '1px solid red').focus();
                }

            } else {
                errorMobileNo.innerHTML = "required";
                $("#mobileNo").css('border-bottom', '1px solid red').focus();
            }
        } else {
            errorLastName.innerHTML = "required";
            $("#lastName").css('border-bottom', '1px solid red').focus();
        }
    } else {
        errorFristName.innerHTML = "required";
        $("#fristName").css('border-bottom', '1px solid red').focus();
    }
}

function stepLoging() {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(logingEmail.value)) {
        errorlogingEmail.innerHTML = "Email is't valid";
        $("#email").css('border-bottom', '1px solid red').focus();
    } else {
        if (logingEmail.value == store.storeEmail) {
            $("#logingEmail").css('border-bottom', '1px solid #999');
            errorlogingEmail.innerHTML = "";
            if (logingpassword.value == store.storePassword) {
                $("#logingpassword").css('border-bottom', '1px solid #999');
                errorlogingpassword.innerHTML = "";
                container1.style.display = "none";
                container2.style.display = "block";
                var text = "<ul>";
                text += "<li>" + "Email: " + store.storeEmail + "</li>";
                text += "<li>" + "Name: " + store.storeFristName + " " + store.storeLastName + "</li>";
                text += "<li>" + "Mobile No: " + store.storeMobileNO + "</li>";
                text += "<li>" + "Facebook Link: " + "<a href='#' class='textLink'>" + store.storeLink1 + "</a>" + "</li>";
                text += "<li>" + "Github Link: " + "<a href='#' class='textLink'>" + store.storeLink2 + "</a>" + "</li>";
                text += "<li>" + "Linkedin Link: " + "<a href='#' class='textLink'>" + store.storeLink3 + "</a>" + "</li>";
                text += "</ul>";
                container2.innerHTML = text;
            } else {
                errorlogingpassword.innerHTML = "Not match password";
                $("#logingpassword").css('border-bottom', '1px solid red').focus();
            }

        } else {
            errorlogingEmail.innerHTML = "This email not match";
            $("#logingEmail").css('border-bottom', '1px solid red').focus();
        }
    }
}

function fristForm() {
    form1.style.left = "40px";
    form2.style.left = "450px";
    form3.style.left = "450px";
    progress.style.width = "120px"
}

function secondForm() {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px"
}

function thirdForm() {
    form1.style.left = "-450px";
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px"
}