// 02.05.19
const COLOR = '#89472A';
const CONSTANT = {
    HOTEL_ID: 5129,
    MAX_ROOM: 5,
    MAX_ADULT_ROOM: 3,
    MAX_CHILD_ROOM: 3,
    MAX_CHILD_AEG: 11,
    MESSAGE_NUM_OF_ROOM: '1',
    MESSAGE_PROMO_CODE: 'Enter code',
    TITLE_DATE_RANGES: 'Nights',
    POP_UP_NUMBER_OF_ROOM: {
        SCROLL: true,
        MAXIMUM_SCROLL: 2,
    },
    COLORS: {
        COLOR: COLOR + ' ',
        HIGHLIGHTEN: COLOR + 20 + '',
        BORDER: COLOR
    }
};

var ageOption = '';
for (var age = 1; age <= CONSTANT.MAX_CHILD_AEG; age++) {
    ageOption += '<option value="' + age + '">' + age + '</option>';
}

var totalAdultOption = '';
for (var totalAdult = 1; totalAdult <= CONSTANT.MAX_ADULT_ROOM; totalAdult++) {
    if (totalAdult == 2) {
        totalAdultOption += '<option value="' + totalAdult + '" selected>' + totalAdult + '</option>';
    } else {
        totalAdultOption += '<option value="' + totalAdult + '"> ' + totalAdult + '</option>';
    }
}

var totalChildOption = '';
for (var totalChild = 0; totalChild <= CONSTANT.MAX_CHILD_ROOM; totalChild++) {
    totalChildOption += '<option value="' + totalChild + '">' + totalChild + '</option>';
}

var roomsOption = '';
for (var room = 2; room <= CONSTANT.MAX_ROOM; room++) {
    roomsOption += '<option value="' + room + '">' + room + ' Rooms' + '</option>';
}

const style = '<style>' +
    '.t-table-condensed .check_in, .t-table-condensed .check_out,.t-hover-day-content {background-color: ' + CONSTANT.COLORS.COLOR + ';color: #ffffff !important;}' +
    '.t-hover-day,.t-hover-day:hover {background-color: ' + CONSTANT.COLORS.COLOR + ';background: ' + CONSTANT.COLORS.COLOR + ';}' +
    '.t-range,.t-day.t-range-limit {background-color: ' + CONSTANT.COLORS.HIGHLIGHTEN + ';color:' + CONSTANT.COLORS.COLOR + ';}' +
    '.t-day.t-range-limit.t-hover-day {background-color: ' + CONSTANT.COLORS.COLOR + ';color:#ffffff ;}' +
    '.t-highlighted,.reservation_box .popup_content label {color:' + CONSTANT.COLORS.COLOR + '; }' +
    '.check_out.t-highlighted {color: #ffffff !important; }' +
    '.t-hover-day::after {border-color: ' + CONSTANT.COLORS.BORDER + ' transparent transparent ;}' +
    '.btn_apply {background-color:' + CONSTANT.COLORS.COLOR + ' !important; }' +
    '.btnbook_reser {background:' + CONSTANT.COLORS.COLOR + ' !important; }' +
    '.t-day:hover {background:' + CONSTANT.COLORS.COLOR + ' ; color: #ffffff !important;}' +
    '</style>';

$(document).ready(function () {
    $('body').append(
        '<script>\n' +
        '    $(document).ready(function () {\n' +
        '        $(\'.t-datepicker\').tDatePicker({});\n' +
        '    });\n' +
        '</script>'
    );
    $('form[name=form_booking]').append(
        '<input type="hidden" name="hotel_id" value="' + CONSTANT.HOTEL_ID + '">' +
        '<input type="hidden" id="night" value="1" class="input_night">' +
        '<input type="hidden" id="current_no_children1" value="0">' +
        '<input type="hidden" id="current_no_rooms" value="0">');
    $('#promocode').append('<input type="text" id="txtPromoCd2" class="input_promocode" name="promoCode" placeholder="' + CONSTANT.MESSAGE_PROMO_CODE + '">');
    $('.input-room').append('<option value="1" selected>' + CONSTANT.MESSAGE_NUM_OF_ROOM + ' Room' + '</option>').append(roomsOption);
    $('#popup_room_list').append(
        ' <div id="numberrroomRow" class="numberroom" style="display: none;">\n' +
        '      <div id="numOfroom"></div>\n' +
        '      <div id="total_adult_child"></div>\n' +
        '      <div class="padding_apply">\n' +
        '         <input type="button" value="Click to Apply" class="btn_apply">\n' +
        '      </div>\n' +
        ' </div>'
    );
    $(style).insertBefore($('.t-datepicker'));
    $('#chknoofroom').attr({
        onchange: 'displayNumberOfrooms(this.value, \'main-page\');displayRoomList(this.value)',
        onclick: 'displayNumberOfrooms(this.value, \'main-page\')'

    });
    $('body').attr({
        onscroll: 'setPopupdate();setPopupPosition();'
    });
    $('[name=form_booking]').attr({
        onSubmit: 'return fncSubmit();'
    });
    $('.t-datepicker').attr({
        onclick: 'setPopupPosition();'
    });
});

function checkValueSelectRoom() {
    var action = $('form').attr('action');
    var url = $('form').serialize();
    window.location.href = action+'?'+url+'&total_adult=2&total_child=0'

}

function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function dateDifference() {
    var strDate1 = document.getElementById("check-in").value;
    var strDate2 = document.getElementById("check-out").value;
    var datDate1 = parseDate(strDate1);
    var datDate2 = parseDate(strDate2);
    if (((datDate2 - datDate1) / (24 * 60 * 60 * 1000)) >= 0) {
        document.getElementById("night").value = ((datDate2 - datDate1) / (24 * 60 * 60 * 1000));
    }
}

function displayAgeOfChildren2(noOfChildren, numOfRoom) {
    $('#clearfixAgeOfChildren').addClass('clearfix');
    var currentNoOfChildren = $('#current_no_children' + numOfRoom).val();
    $('#current_no_children' + numOfRoom).val(noOfChildren);
    if (noOfChildren === 0) {
        $('#ageRow' + numOfRoom).fadeOut();
    }
    if (parseInt(noOfChildren) < parseInt(currentNoOfChildren)) {
        for (var i = parseInt(noOfChildren); i <= parseInt(currentNoOfChildren); i++) {
            $('#field_age_of_child' + numOfRoom + i).remove();
        }
    } else {
        var ageOfChildrenTag = '';
        for (var num = parseInt(currentNoOfChildren); num < parseInt(noOfChildren); num++) {
            ageOfChildrenTag += '<div id="field_age_of_child' + numOfRoom + num + '">' + '<div class="col-xs-6">' + '<div class="form-group">' + '<div class="input-group select-no-rd select-wrapper">' + '<i class="fa fa-angle-down arrow" aria-hidden="true"></i>' + '<select id="age_of_child' + parseInt(numOfRoom - 1) + num + '" name="age_of_child[' + parseInt(numOfRoom - 1) + '][' + num + ']" class="no-radius select-form ">' +
                ageOption + '</select>' + '</div>' + '</div>' + '</div>';
        }
        $('#ageOfChildren' + numOfRoom).append(ageOfChildrenTag);
        if ($('#ageRow' + numOfRoom).css('display') === 'none') {
            $('#ageRow' + numOfRoom).fadeIn();
        }
    }
}

function displayNumberOfrooms(noOfRoom, page) {
    $('#bookNow').removeAttr('onclick').attr('type','submit');
    if (noOfRoom > 0) {
        if (page === 'main-page') {
            var selectValue = $('#chknoofroom').find(":selected").val();
            $('#chknoofroomModal option[value="' + selectValue + '"]').attr('selected', 'selected');
        } else {
            var selectValue = $('#chknoofroomModal').find(":selected").val();
            $('#chknoofroom option[value="' + selectValue + '"]').attr('selected', 'selected');
        }
        if (noOfRoom > 0) {
            $('#numberrroomRow').css({"display": "block"});
            $('#popup_room_list').css({"display": "block"});
            $("#adultRoom1").css({"float": "left", "margin": "0", "width": "100%"});
            $("#childRoom1").css({"float": "left", "margin": "0", "width": "100%"});
        } else {
            $('#numberrroomRow').css({"display": "block"});
            $('#popup_room_list').css({"display": "block"});
            $("#adultRoom1").removeAttr("style");
            $("#childRoom1").removeAttr("style");
        }
        var currentnoOfRoom = $('#current_no_rooms').val();
        noOfRoom = parseInt(noOfRoom);
        currentnoOfRoom = parseInt(currentnoOfRoom);
        if (noOfRoom === 0) {
            if ($('#numberrroomRow').css('display') !== 'none') {
                $('#current_no_rooms').val(1);
                $('#numOfroom').html('');
                $('#numberrroomRow').fadeOut();
                $('#ageRow1').fadeOut();
                $('#total_adult_child').html('');
            }
        } else {
            if (noOfRoom > currentnoOfRoom) {
                currentnoOfRoom++;
                var numOfroomTag = '';
                for (var num = currentnoOfRoom; num <= noOfRoom; num++) {
                    numOfroomTag += '<div id="field_total_adult_children' + num + '" class="clearfix">' + '<div class="clearfix"></div>' + '<div style="width: 100%;">' + '<div id="numberrroomRow" class="numberroom"><label>Number Of Room</label> <label id="numberOfRoom' + num + '">' + num + '/' + noOfRoom + '</label></div>' + '<div class="form-group form_group_half">' + '<div id="adultRoom1" class="input-group select-no-rd select-wrapper">' + '<div class="input-group-addon">Adults</div>' + '<i class="fa fa-angle-down arrow" aria-hidden="true"></i>' + '<select id="chknoadult" class="no-radius select-form" name="total_adult[' + parseInt(num - 1) + ']">' +
                        totalAdultOption + '</select>' + '</div>' + '</div>' + '</div>' + '<div class="">' + '<div class="form-group form_group_half">' + '<div id="childRoom1" class="input-group select-no-rd select-wrapper">' + '<div class="input-group-addon">Children</div>' + '<i class="fa fa-angle-down arrow" aria-hidden="true"></i>' + '<select id="chknochild" class="no-radius select-form" name="total_child[' + parseInt(num - 1) + ']" onchange="javascript: displayAgeOfChildren2(this.value,' + num + ');">' +
                        totalChildOption + '</select>' + '</div>' + '</div>' + '</div>' + '<label id="ageRow' + num + '" style="display: none;">Children\'s ages (years)</label>' + '<div class="clearfix"></div>' + '<div id="ageOfChildren' + num + '" style=""></div>' + '<input type="hidden" id="current_no_children' + num + '" value="0">' + '</div>' + '</div>';
                }
                $('#total_adult_child').append(numOfroomTag);
            } else {
                for (var num = noOfRoom + 1; num <= currentnoOfRoom; num++) {
                    $('#field_total_adult_children' + num).remove();
                }
            }
            $('#current_no_rooms').val(noOfRoom);
        }
        for (var i = 1; i <= noOfRoom; i++) {
            $('#numberOfRoom' + i).html(i + '/' + noOfRoom);
        }
    } else {
        $('#numberrroomRow').css({"display": "none"});
    }
    setPopupPosition();
}

function displayRoomList(noOfRoom) {
    var numberrroomRow = document.getElementById('numberrroomRow');
    var e_numberOfRoom = 0;

    for (var i = 1; i <= CONSTANT.POP_UP_NUMBER_OF_ROOM.MAXIMUM_SCROLL; i++) {
        var e_numberOfRoom = e_numberOfRoom + $('#field_total_adult_children' + i).height();
    }

    var result = e_numberOfRoom + 'px';

    if (CONSTANT.POP_UP_NUMBER_OF_ROOM.SCROLL === true && noOfRoom > CONSTANT.POP_UP_NUMBER_OF_ROOM.MAXIMUM_SCROLL) {
        numberrroomRow.style.height = result;
        numberrroomRow.style.overflow = "scroll";

    } else if (noOfRoom > 0) {
        $('#numberrroomRow').css({"display": "block"});
        numberrroomRow.style.height = "auto";
        $('.border_fix').removeClass("active");

    } else {
        $('#numberrroomRow').css({"display": "none"});
        $('.border_fix').removeClass("active");
    }
    setPopupPosition();
}

function setPopupPosition() {
    var scrollPosition = $(window).scrollTop();
    var elementOffset = $('#chknoofroom').offset().top;
    var elementDistance = (elementOffset - scrollPosition);
    var windowHeight = $(window).height();
    var popup_room_list = $('#popup_room_list').height();
    var datepickerDays = $('.t-datepicker-days').height();
    var bottomPosition = windowHeight - elementDistance;
    if (bottomPosition < popup_room_list || bottomPosition < datepickerDays) {
        $('#popup_room_list').addClass('popupTop');
        // $('.t-datepicker-days').css({'bottom': '88px', 'top': 'auto'});
        // $('.t-arrow-top').css({'top': '-40px', 'bottom': 'auto', 'transform': 'rotate(180deg)'});

    } else {
        $('#popup_room_list').removeClass('popupTop');
        // $('.t-datepicker-days').css({'top': '84px', 'bottom': 'auto'});
        $('.t-arrow-top').css({'top': 'auto', 'bottom': '-44px', 'transform': 'rotate(0deg)'});

    }
    if (bottomPosition < 430) {
        $('.reservation').addClass('up');
    } else {
        $('.reservation').removeClass('up');
    }
}

function setPopupdate() {

    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var bottomPosition = 500 + scrollPosition;

    if (bottomPosition < windowHeight) {
        $('.daterangepicker').addClass('popupTop');
    } else {
        $('.daterangepicker').removeClass('popupTop');
    }
}

$(document).click(function (event) {
    if (!$(event.target).closest('#numberrroomRow').length && !$(event.target).closest('.content_ibe').length) {
        if ($('#numberrroomRow').css('display') !== 'none') {
            $('#numberrroomRow').fadeOut();

        }

    }
});

function fncSubmit() {
    if (document.form_booking.chknoofroom.value === '0') {
        // $('.border_fix').addClass("active");
        Swal.fire(
            'Number of room ?',
            'Please select the number of rooms.',
            'error'
        ).then(
            function () {
                $('#chknoofroom').val('1');
                setTimeout(function () {
                    $('#chknoofroom').click();
                }, 50);
            }
        );

        return false;
    }
    document.form_booking.submit();
}

$(document).ready(function () {
    $('a[href*=#ibe]').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 130;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });

});
$(document).ready(function () {
    $('.btn_apply').click(function () {
        $("#popup_room_list").css({"display": "none"});
    });
});