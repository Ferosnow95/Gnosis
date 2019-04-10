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
    PAGE LAYOUT
*/

var layout_state = 0;

var layout_state_0_array = new Array('0%', '50%', '50', '0%');
var layout_state_1_array = new Array('50%', '50%', '0%', '0%');

function update_rows(layout_array) {
    log("update_rows invoked");
    for(index = 0; index < layout_array.length; index++) {
        $("#row_" + index).animate({height: layout_array[index]});
    }
}



/*
    BUTTON CONTROLS
*/

var result = 0;

$(document).ready(function(){
    var score = localStorage.getItem("score");
    var i = 0;
    for(i = 0; i < score.length; i ++) {
        try {
            if(score[i] == 1) {
                result++;
            }
        } catch(e){}
    }
});


function display_histry() {
    window.setTimeout(function(){
        $(".content_1").fadeIn();
        $("#percentage").text("" + (result * 10) + "%");
        $("#small_text").text("" + result +" out of 10 correct answers.")
    }, 500);
    
}

function auto_start() {
    update_rows(layout_state_1_array);
    $("#start_button").animate({deg: 360}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
    $(".content_1").show();
    $("#message_above_start_button").css({'color':'#ECE1DC'});
    layout_state = 1;
    display_histry();
}

$("#back_arrow").click(function(){
    location.href="landing_page.html";
});