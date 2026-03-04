$("ul.sf-menu").superfish({
    delay: 800,
    animation: {
        opacity: "show",
        height: "show"
    },
    speed: "normal",
    autoArrows: false,
    dropShadows: false
});
$(document).ready(function() {
    $(".magnify").css({
        opacity: "0"
    });
    $(".picture a").hover(function() {
        $(this).find(".magnify").stop().fadeTo(800, 1)
    }, function() {
        $(this).find(".magnify").stop().fadeTo(800, 0)
    })
});
$(".tooltip_1").poshytip({
    className: "tip-twitter",
    showTimeout: 1,
    alignTo: "target",
    alignX: "center",
    offsetY: 5,
    allowTipHover: false,
    fade: true,
    slide: true
});
$("a[data-rel^='prettyPhoto']").prettyPhoto({
    social_tools: "",
    overlay_gallery: false
});
$(function() {
    var h = "THXX0002";
    var f = "c";
    var j = "SELECT item.condition FROM weather.forecast WHERE location='" + h + "' AND u='" + f + "'";
    var i = Math.floor((new Date().getTime()) / 1200 / 1000);
    var g = "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(j) + "&format=json&_nocache=" + i;
    window.wxCallback = function(b) {
        var a = b.query.results.channel.item.condition;
        $("#wxIcon").css({
            backgroundPosition: "-" + (61 * a.code) + "px 0"
        }).attr({
            title: a.text
        });
        $("#wxIcon2").append('<img src="http://l.yimg.com/a/i/us/we/52/' + a.code + '.gif" width="34" height="34" title="' + a.text + '" />');
        $("#wxTemp").html(a.temp + "&deg;" + (f.toUpperCase()))
    };
    $.ajax({
        url: g,
        dataType: "jsonp",
        cache: true,
        jsonpCallback: "wxCallback"
    })
});
$("#main-nav").mobileMenu();
$(".rate_wd").each(function(e) {
    var f = this;
    var d = {
        widget_id: $(f).attr("id"),
        fetch: 1
    };
    $.post("ratings.php", d, function(a) {
        $(f).data("fsr", a);
        set_votes(f)
    }, "json")
});
$(".ratings_stars").hover(function() {
    $(this).prevAll().andSelf().addClass("ratings_over");
    $(this).nextAll().removeClass("ratings_vote")
}, function() {
    $(this).prevAll().andSelf().removeClass("ratings_over");
    set_votes($(this).parent())
});
$(".ratings_stars").bind("click", function() {
    var f = this;
    var d = $(this).parent();
    var e = {
        clicked_on: $(f).attr("class"),
        widget_id: $(f).parent().attr("id")
    };
    $.post("ratings.php", e, function(a) {
        d.data("fsr", a);
        set_votes(d)
    }, "json")
});

function set_votes(e) {
    var g = $(e).data("fsr").whole_avg;
    var h = $(e).data("fsr").number_votes;
    var f = $(e).data("fsr").dec_avg;
    window.console && console.log("and now in set_votes, it thinks the fsr is " + $(e).data("fsr").number_votes);
    $(e).find(".star_" + g).prevAll().andSelf().addClass("ratings_vote");
    $(e).find(".star_" + g).nextAll().removeClass("ratings_vote");
    $(e).find(".total_votes").text(h + " votes (" + f + " Rating)")
}
$(function() {
    var b = $(".expose").bind("click keydown", function() {
        $(this).expose({
            onLoad: function() {
                b.css({
                    backgroundColor: "#f6f6f6"
                })
            },
            onClose: function() {
                b.css({
                    backgroundColor: null
                })
            }
        })
    })
});
