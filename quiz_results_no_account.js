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
    UTILITY FUNCTIONS
*/

function calculate_score() {
    var score = localStorage.getItem("score");
    var i;
    var result = 0;
    try{
    for(i = 0; i < 20; i++) {
        log(i + ": " + score[i]);
        if(score[i] != undefined) {
            if(score[i] == 1) {
                result++;
            }
        }
    }}catch(e){}
    return result;
}

var result = calculate_score();

$("#percentage").text(Math.round(result / 10 * 100) + "%");
$("#number").text(result + " out of 10");

$("#start_button").click(function(){
   location.href="landing_page.html"; 
});

$("#register").click(function(){
   location.href="sign_up.html"; 
});