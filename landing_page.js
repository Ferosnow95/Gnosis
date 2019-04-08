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

var layout_state_0_array = new Array('5%', '5%', '74%', '8%', '8%', '0%', '0%', '0%', '0%', '0%');
var layout_state_1_array = new Array('5%', '5%', '56%', '8%', '8%', '8%', '10%', '0%', '0%', '0%');
var layout_state_2_array = new Array('5%', '5%', '36%', '8%', '8%', '8%', '10%', '8%', '12%', '0%');

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
            update_rows(layout_state_1_array);
            $("#start_button").animate({deg: 360}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
            $(".content_1").show();
            $("#message_above_start_button").css({'color':'#ECE1DC'});
            layout_state = 1;
            break;
        default:
            update_rows(layout_state_0_array);
            $("#start_button").animate({deg: 0}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
            $(".content_1").hide();
            $(".content_2").hide();
            $("#message_above_start_button").css({'color':'#221F25'});
            layout_state = 0;
            break;
    }
});


$("#entry_level").click(function() {
    log("entry_level clicked");
    $("#entry_level").attr('class', 'btn btn-secondary content_1');
    update_rows(layout_state_2_array);
    $("#start_button").animate({deg: 720}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
    $(".content_2").show();
    layout_state = 2;
    localStorage.setItem("difficulty", "easy");
});

$("#intermedia_level").click(function() {
    log("intermedia_level clicked");
    $("#intermedia_level").attr('class', 'btn btn-secondary content_1');
    update_rows(layout_state_2_array);
    $("#start_button").animate({deg: 720}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
    $(".content_2").show();
    layout_state = 2;
    localStorage.setItem("difficulty", "medium");
});

$("#advanced_level").click(function() {
    log("entry_level clicked");
    $("#advanced_level").attr('class', 'btn btn-secondary content_1');
    update_rows(layout_state_2_array);
    $("#start_button").animate({deg: 720}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
    $(".content_2").show();
    layout_state = 2;
    localStorage.setItem("difficulty", "hard");
});


$("#history").click(function() {
    log("history clicked");
    $("#history").attr('class', 'btn btn-secondary content_2');
    window.setTimeout(function(){
        update_rows(layout_state_0_array);
        $("#start_button").animate({deg: 0}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
        $(".content_1").hide();
        $(".content_2").hide();
        $(".start_logo").hide();
        layout_state = 0;
        window.setTimeout(function(){
            location.href = "quiz_initiation.html";
        }, 500);
    }, 500);
    localStorage.setItem("category", "23");
});

$("#mathematics").click(function() {
    log("mathematics clicked");
    $("#mathematics").attr('class', 'btn btn-secondary content_2');
    window.setTimeout(function(){
        update_rows(layout_state_0_array);
        $("#start_button").animate({deg: 0}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
        $(".content_1").hide();
        $(".content_2").hide();
        $(".start_logo").hide();
        layout_state = 0;
        window.setTimeout(function(){
            location.href = "quiz_initiation.html";
        }, 500);
    }, 500);
    localStorage.setItem("category", "19");
});

$("#art").click(function() {
    log("art clicked");
    $("#art").attr('class', 'btn btn-secondary content_2');
    window.setTimeout(function(){
        update_rows(layout_state_0_array);
        $("#start_button").animate({deg: 0}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
        $(".content_1").hide();
        $(".content_2").hide();
        $(".start_logo").hide();
        layout_state = 0;
        window.setTimeout(function(){
            location.href = "quiz_initiation.html";
        }, 500);
    }, 500);
    localStorage.setItem("category", "25");
});

$("#sports_and_fitness").click(function() {
    log("sports_and_fitness clicked");
    $("#sports_and_fitness").attr('class', 'btn btn-secondary content_2');
    window.setTimeout(function(){
        update_rows(layout_state_0_array);
        $("#start_button").animate({deg: 0}, {duration: 500, step: function(now){$(this).css({transform: 'rotate('+now+'deg)'})}});
        $(".content_1").hide();
        $(".content_2").hide();
        $(".start_logo").hide();
        layout_state = 0;
        window.setTimeout(function(){
            location.href = "quiz_initiation.html";
        }, 500);
    }, 500);
    localStorage.setItem("category", "21");
});