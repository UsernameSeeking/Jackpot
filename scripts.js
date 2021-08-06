'use strict'

function start() {
    $('#numb').css("animation", "numbdown 1.5s");
    $('#startbutton, #giftbutton').css("display", "none");
    $('#notibox').text("Đang quay...");
    var color = Math.floor(Math.random() * 6);
    var colorlist = ["#064D78", "#1482C4", "#12782E", "#00C436", "#0C7867", "#0AC4A6"];
    var tilelist = ["#DE977A", "#C4585A", "#DE977A", "#C4585A", "#DE977A", "#C4585A"];
    $('#gift').css({"display": "none", "background-color": colorlist[color]});
    $('.tile').css("background-color", tilelist[color]);
    if (document.getElementsByClassName("row2").length > 5) {
        if (document.getElementsByClassName("row3").length == 9) $("#row38, #row39").remove();
        $("#row36, #row37, #row26, #row27").remove();
    }
    var i;
    var count = 0;
    var check = 1;
    var final;
    var mainl = setInterval(function() {
        if (check >= 0) {
            var a1 = document.getElementsByClassName('row1');
            i = Math.floor(Math.random() * 5);
            $('#column1').prepend(a1[i]);
        }
        if (check >= -2) {
            var a2 = document.getElementsByClassName('row2');
            if (check <= 0 && a2.length == 5) {
                for (var j = 0; j < a2.length; j ++) {
                    if (a2[j].innerText == final) {
                        var add1 = a2[j].cloneNode(true);
                        var add2 = a2[j].cloneNode(true);
                        add1.id = "row26";
                        add2.id = "row27";
                        $('#column2').append(add1, add2);
                        break;
                    }
                }
            }
            i = Math.floor(Math.random() * a2.length);
            $('#column2').prepend(a2[i]);
        }
        if (check >= -4) {
            var a3 = document.getElementsByClassName('row3');
            if (check <= -2 && a3.length == 5) {
                for (var j = 0; j < a3.length; j ++) {
                    if (a3[j].innerText == final) {
                        var add3 = a3[j].cloneNode(true);
                        var add4 = a3[j].cloneNode(true);
                        add3.id = "row36";
                        add4.id = "row37";
                        $('#column3').append(add3, add4);
                        if (document.getElementsByClassName("row2")[1].innerText == final) {
                            var add5 = a3[j].cloneNode(true);
                            var add6 = a3[j].cloneNode(true);
                            add5.id = "row38";
                            add6.id = "row39";
                            $('#column3').append(add5, add6);
                        }
                        break;
                    }
                }
            }
            i = Math.floor(Math.random() * a3.length);
            $('#column3').prepend(a3[i]);
        }
        count ++;
        if (count >= 30 && count < 38 && check > 0) {
            check = Math.floor(Math.random() * 5);
        }
        else {
            if (check <= 0) {
                if (check == 0) {
                    final = document.getElementsByClassName('row1')[1].innerText;
                }
                check --;
                if (check == -5) {
                    $('#numb').css("animation", "");
                    $('#notibox').text("Mở quà đê!");
                    $('#gift, #giftbutton').css("display", "block");
                    $('#giftbutton').click(opengift);
                    
                    var c1 = document.getElementsByClassName('row1')[1].innerText;
                    var c2 = document.getElementsByClassName('row2')[1].innerText;
                    var c3 = document.getElementsByClassName('row3')[1].innerText;

                    if (c1 == c2 && c1 == c3) $('#starbox, #fireworks').css("display", "block");
                    else $('#starbox, #fireworks').css("display", "none");
                    clearInterval(mainl);
                }
            }
            if (count == 38) check = 0;
        }
    }, 100);
}

function opengift() {
    $('#gift, #giftbutton, #fireworks').css("display", "none");
    $('#startbutton, #giftcontentbox').css("display", "block");
}

function closegift() {
    $('#notibox').text("Kéo cần đê!");
    $('#giftcontentbox').css("display", "none");
}
