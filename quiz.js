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

var questions;
var question_index = 0;

function renderJSON(json) {
//    'use strict';
//    var keys = [],
//        retValue = "";
//    for (var key in json) {
//        if (typeof json[key] === 'object') {
//            retValue += "<div class='tree'>" + key;
//            retValue += renderJSON(json[key]);
//            retValue += "</div>";
//        } else {
//            retValue += "<div class='tree'>" + key + " = " + json[key] + "</div>";
//        }
//        keys.push(key);
//    }
//    return retValue;
    return json;
}

function get_questions(amount, category, difficulty) {
    var url = 'https://opentdb.com/api.php?amount='+amount+'&category='+category+'&difficulty='+ difficulty;
    $.getJSON(url, function(data) {
        questions = data;
        display_question(question_index);
    });
}

var category = localStorage.getItem("category");
var difficulty = localStorage.getItem("difficulty");
get_questions(10, category, difficulty);

function update_progress_bar() {
    $("#bar").attr('style', 'height: 5px; width: ' + (question_index * 10) + '%');
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var answers;
var c;

function display_question(index) {
    log("display question " + index);
    log(questions.results[index]);
    if(questions == undefined || questions.results.length == 0) {
        $("#server_no_response").fadeIn();
        window.setTimeout(function() {
            location.href = "landing_page.html";
        }, 3000);
    } else {
        $("#server_no_response").fadeOut();        
    }
    
    var q = questions.results[index].question;
    var t = questions.results[index].type;
    c = questions.results[index].correct_answer;
    var i = questions.results[index].incorrect_answers;
    log(q);
    $("#question").html(q);
    log(t);
    if(t == "multiple") {
        $("#type_of_question").text("Multiple choice question");
    } else if(t == "boolean") {
        $("#type_of_question").text("True or false question");        
    } else {
        $("#type_of_question").text(t);        
    }
    log(c);
    log(i);
    answers = Array(i.length + 1);
    var n;
    for(n = 0; n < i.length; n++) {
        answers[n] = i[n];
    }
    answers[n] = c;
    shuffle(answers);
    log(answers);
    var answers_html = "";
    for(n = 0; n < answers.length; n++) {
        answers_html = answers_html.concat("<button id='answer_" + n + "' type='button' class='btn answer_button' onclick='choose(" + n + ")'>" 
                                           + answers[n]
                                           +"</button><span>&nbsp &nbsp &nbsp</span>")
    }
    $("#answers").html(answers_html);
    
    update_progress_bar();
}


/*
    BUTTON CONTROLS
*/

$("#login_button_0").click(function() {
    var loggedin = localStorage.getItem("loggedin");
    if(loggedin == undefined || loggedin == "false") {
        log("login_button_0 clicked");
        location.href="login.html";
    } else {
        localStorage.setItem("loggedin",false);
        $("#login_button_0").text("Login");
    }
});

$("#settings_button").click(function() {
    log("settings_button clicked");
    location.href="quiz_history_results.html";
});

$("#next_button").click(function() {
    log("next_button clicked");
    question_index++;
    if(question_index == 10) {
        location.href = "quiz_results_no_account.html";
    } else if(question_index < 10){
        display_question(question_index);
    }
});

$("#previous_button").click(function() {
    log("next_button clicked");
    if(question_index > 0) {
        question_index--;
        display_question(question_index);
    }
});

var score = Array(10);

function choose(index) {
    log("answer " + index + " is chosen.");
    var x;
    for(x=0; x<5; x++) {
        try{
            $("#answer_"+x).attr("class", "btn answer_button");
        }catch(e){}
    }
    $("#answer_"+index).attr("class", "btn answer_button_chosen");
    if(answers[index] == c) {
        log("correct.");    
        score[question_index] = 1;
    } else {
        log("wrong.");        
        score[question_index] = 0;
    }
    log(score);
    localStorage.setItem("score", score);
}


var loggedin = localStorage.getItem("loggedin");
if(loggedin == undefined || loggedin == false) {
    $("#login_button_0").text("Login");
} else {
    $("#login_button_0").text("Logout");
}

$(document).ready(function() {
    localStorage.setItem("score", Array(10));
});