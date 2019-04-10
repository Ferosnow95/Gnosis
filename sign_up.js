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

var layout_state_0_array = new Array('5%', '5%', '74%', '8%', '8%', '0%', '0%', '0%', '0%', '0%', '0%');
var layout_state_1_array = new Array('5%', '5%', '56%', '8%', '8%', '8%', '10%', '0%', '0%', '0%', '0%');
var layout_state_2_array = new Array('5%', '5%', '36%', '8%', '8%', '8%', '10%', '8%', '12%', '0%', '0%');
var layout_state_3_array = new Array('5%', '5%', '16%', '8%', '8%', '8%', '10%', '8%', '12%', '8%', '12%');

function update_rows(layout_array) {
    log("update_rows invoked");
    for(index = 0; index < layout_array.length; index++) {
        $("#row_" + index).animate({height: layout_array[index]});
    }
}



/*
    BUTTON CONTROLS
*/

$("#login_button_0").click(function() {
    log("login_button_0 clicked");
    location.href="login.html";
});

$("#settings_button").click(function() {
    log("settings_button clicked");
    location.href="quiz_history_results.html";
});

$("#start_button").click(function() {
    log("start_button clicked");
    switch(layout_state) {
        case 0:
            auto_start();
            break;
        default:
            update_rows(layout_state_0_array);
            $("#start_button").animate({deg: 0}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
            $(".content_1").hide();
            $(".content_2").hide();
            $(".content_3").hide();
            $("#message_above_start_button").css({'color':'#221F25'});
            layout_state = 0;
            break;
    }
});

function auto_start() {
    update_rows(layout_state_1_array);
    $("#start_button").animate({deg: 360}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
    $(".content_1").show();
    $("#message_above_start_button").css({'color':'#ECE1DC'});
    layout_state = 1;
}

var email = null;
var first_name = null;
var last_name = null;
var pwd = null;
var confirmed_pwd = null;    
var index = 0;

$("#continue_1").click(function() {
    log("continue_1 clicked");
    
    email = $("#email").val();
    log("email: " + email);
    var duplicated_email = false;
    while(localStorage.getItem('email_' + index) != null) {
        if(localStorage.getItem('email_' + index) == email) {
            log("ERROR, duplicated email");
            duplicated_email = true;
            break;
        }
        index++;
    }
    
    if(!duplicated_email) {
        update_rows(layout_state_2_array);
        $("#start_button").animate({deg: 720}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
        $(".content_2").show();
        layout_state = 2;
        $("#continue_1").hide();
    }
});

$("#continue_2").click(function() {
    log("continue_2 clicked");
    
    first_name = $("#first_name").val();
    log("first_name: " + first_name);
    last_name = $("#last_name").val();
    log("last_name: " + last_name);
    
    update_rows(layout_state_3_array);
    $("#start_button").animate({deg: 1080}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
    $(".content_3").show();
    layout_state = 3;
    $("#continue_2").hide();
});

$("#continue_3").click(function() {
    log("continue_3 clicked");
    pwd = $("#pwd").val();
    log("pwd: " + pwd);
    confirmed_pwd = $("#confirmed_pwd").val();
    log("confirmed_pwd: " + confirmed_pwd);
    
    if(pwd != confirmed_pwd) {
        log("ERROR, passwords don't match.")
    } else {
        localStorage.setItem('email_' + index, email);
        localStorage.setItem('first_name_' + index, first_name);
        localStorage.setItem('last_name_' + index, last_name);
        localStorage.setItem('pwd_' + index, pwd); 
        
        log("print all accounts:")
        index = 0;        
        while(localStorage.getItem('email_' + index) != null) {
            log(localStorage.getItem('email_' + index) + " " + localStorage.getItem('first_name_' + index) + " " + localStorage.getItem('last_name_' + index) + " " + localStorage.getItem('pwd_' + index));
            index++;            
        }
    }
    location.href = "quiz_history_results.html";
});