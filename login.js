/*
    LOGGING AND DEBUGGING
*/

var console_debug = true;

function log(txt) {
    if(console_debug) {
        console.log(txt);
    }
}

if(console_debug) {
    switch(page_index) {
        case 0:
            log("landing_page.html (landing page / quiz selection - age / quiz selection -type)");
            break;
        case 1:
            log("login.html (login)");
            break;
        case 2:
            log("sign_up.html (sign up)");
            break;
        case 3:
            log("quiz_initiation.html (quiz initiation)");
            break;
        case 4:
            log("quiz.html (quiz multiple choices / quiz true and false / quiz question and answers)");
            break;
        case 5:
            log("quiz_results_no_account.html (quiz results no account)");
            break;
        case 6:
            log("quiz_results_logged_in.html (quiz results logged in)");
            break;
        case 7:
            log("quiz_history_results.html (quiz history results)");
            break;
        default:
            log("ERROR, page_index is not defined properly.");
            break;
    }
}



/*
    BUTTON CONTROLS
*/

$("#login_button_0").click(function() {
    log("login_button_0 clicked");
});

$("#settings_button").click(function() {
    log("settings_button clicked");
    location.href="quiz_history_results.html";
});

$("#login_button_1").click(function() {
    log("login_button_1 clicked");
    var login_name = $("#email").val();
    var pwd_1 = $("#password").val();
    var index = 0;
    var result = false;
    while(localStorage.getItem('name_' + index) != null) {
        index++;
        if(localStorage.getItem('name_' + index) == login_name && localStorage.getItem('pwd_' + index)) {
            log("login successful");
            result = true;
            break;
        }
    }
    if(login_name == "test" && pwd_1 == "test") {
        log("login as test");
    } else if(!result) {
        log("login failed");
        $("#login_error").text("Name or password is not correct.");
        $("#login_error").fadeIn();
        return;
    }
    location.href="quiz_history_results.html";
});

$("#register").click(function() {
    log("register clicked");
    location.href="sign_up.html";
});