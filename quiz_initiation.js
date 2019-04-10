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

$("#start_button").click(function() {
    log("start_button clicked");
    location.href="quiz.html";
});

var loggedin = localStorage.getItem("loggedin");
if(loggedin == undefined || loggedin == false) {
    $("#login_button_0").text("Login");
} else {
    $("#login_button_0").text("Logout");
}