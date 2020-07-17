/*jslint browser: true*/
/*global $, jQuery*/

function changeTitle() {
    'use strict';
    var date = new Date();
    if (date.getHours() < 17) {
        $('.menu-mess>span').html("Bonjour pseudo");

    } else {
        $('.menu-mess>span').html("Bonsoir pseudo");
    }
}

function getTheDateName(dayNumber) {
    'use strict';
    
    var dayName;
    
    switch (dayNumber) {
    case 0:
        dayName = "Lundi";
        break;
    case 1:
        dayName = "Mardi";
        break;
    case 2:
        dayName = "Mercredi";
        break;
    case 3:
        dayName = "Jeudi";
        break;
    case 4:
        dayName = "Vendredi";
        break;
    case 5:
        dayName = "Samedi";
        break;
    case 6:
        dayName = "Dimanche";
        break;
    }
    return dayName;
}

function getTheMonthName(monthNumber) {
    'use strict';
    var monthName;
    switch (monthNumber) {
    case 0:
        monthName = "Janvier";
        break;
    case 1:
        monthName = "Février";
        break;
    case 2:
        monthName = "Mars";
        break;
    case 3:
        monthName = "Avril";
        break;
    case 4:
        monthName = "Mai";
        break;
    case 5:
        monthName = "Juin";
        break;
    case 6:
        monthName = "Juillet";
        break;
    case 7:
        monthName = "Aout";
        break;
    case 8:
        monthName = "Septembre";
        break;
    case 9:
        monthName = "Octobre";
        break;
    case 10:
        monthName = "Novembre";
        break;
    case 11:
        monthName = "Décembre";
        break;
    }
    return monthName;
}

$(document).ready(function () {
    'use strict';
    var date = new Date();
    
    changeTitle();

    $('span.date').html(getTheDateName(date.getDay()) + " " + date.getDate() + " " + getTheMonthName(date.getMonth()) + " " + date.getFullYear());
    
    $('span.date').css({
        "margin-left": Math.trunc($('.horizontal-board').width() - ($('span.news').width() + $('.fa.fa-rss').width() + 162 + 34)) + "px"
    });
    
    $('.menu-title').css({
        "margin-left": ($('.header').width() - $('.menu-title span').width()) / 2
    });
    
    $('.content-title').css({
        "margin-left": (($('.vertical-nav').width() - $('.navbar').width() + 4) - $('.content-title').width()) / 2
    });
    
    $(window).resize(function () {
        $('span.date').css({
            "margin-left": Math.trunc($('.horizontal-board').width() - ($('span.news').width() + $('.fa.fa-rss').width() + 162 + 34)) + "px"
        });

        $('.menu-title').css({
            "margin-left": ($('.header').width() - $('.menu-title span').width()) / 2
        });
        
        $('.content-title').css({
            "margin-left": (($('.vertical-nav').width() - $('.navbar').width() + 4) - $('.content-title').width()) / 2
        });
    });
    
    if ($('.navbar li i').attr('class').split(' ')[2] === "active") {
        $('.menu-title span').html($('.navbar li').attr('name').split(' ')[0]);
    }

    $('.fas fa-home, .home').click(function () {
        $('.fas.fa-home').addClass("active");
        $('li.home').addClass("active");
        $('.far.fa-calendar-alt').removeClass("active");
        $('li.calendar').removeClass("active");
        $('.far.fa-chart-bar').removeClass("active");
        $('li.line-chart').removeClass("active");
        $('.fa.fa-cog').removeClass("active");
        $('li.cog').removeClass("active");
        $('.menu-title span').html($('.home').attr('name'));
    });

    $('.far.fa-calendar-alt, .calendar').click(function () {
        $('.fas.fa-home').removeClass("active");
        $('li.home').removeClass("active");
        $('.far.fa-calendar-alt').addClass("active");
        $('li.calendar').addClass("active");
        $('.far.fa-chart-bar').removeClass("active");
        $('li.line-chart').removeClass("active");
        $('.fa.fa-cog').removeClass("active");
        $('li.cog').removeClass("active");
        $('.menu-title span').html($('.calendar').attr('name'));
    });

    $('.far.fa-chart-bar, .line-chart').click(function () {
        $('.fas.fa-home').removeClass("active");
        $('li.home').removeClass("active");
        $('.far.fa-calendar-alt').removeClass("active");
        $('li.calendar').removeClass("active");
        $('.far.fa-chart-bar').addClass("active");
        $('li.line-chart').addClass("active");
        $('.fa.fa-cog').removeClass("active");
        $('li.cog').removeClass("active");
        $('.menu-title span').html($('.line-chart').attr('name'));
    });

    $('.fa.fa-cog, .cog').click(function () {
        $('.fas.fa-home').removeClass("active");
        $('li.home').removeClass("active");
        $('.far.fa-calendar-alt').removeClass("active");
        $('li.calendar').removeClass("active");
        $('.far.fa-chart-bar').removeClass("active");
        $('li.line-chart').removeClass("active");
        $('.fa.fa-cog').addClass("active");
        $('li.cog').addClass("active");
        $('.menu-title span').html($('.cog').attr('name'));
    });
});
