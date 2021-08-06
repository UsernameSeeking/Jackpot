'use strict'

function start() {
    document.getElementById('numb').style.animation = "numbdown 1.5s";
    document.getElementById('startbutton').style.display = "none";
    document.getElementById('notibox').innerText = "Đang quay..."
    document.getElementById('gift').style.display = "none";
    document.getElementById('giftbutton').style.display = "none";
    var color = Math.floor(Math.random() * 6);
    var colorlist = ["#064D78", "#1482C4", "#12782E", "#00C436", "#0C7867", "#0AC4A6"];
    var tilelist = ["#DE977A", "#C4585A", "#DE977A", "#C4585A", "#DE977A", "#C4585A"];
    document.getElementById('gift').style.backgroundColor = colorlist[color];
    var tiles = document.getElementsByClassName('tile');
    tiles[0].style.backgroundColor = tilelist[color];
    tiles[1].style.backgroundColor = tilelist[color];
    if (document.getElementsByClassName("row2").length > 5) {
        if (document.getElementsByClassName("row3").length == 8) document.getElementById("row38").remove();
        for (var j = 0; j < 2; j ++) {
            document.getElementById("row2"+(6+j)).remove();
            document.getElementById("row3"+(6+j)).remove();
        }
    }
    var i;
    var count = 0;
    var check = 1;
    var final;
    var mainl = setInterval(function() {
        if (check >= 0) {
            var b1 = document.getElementById('column1');
            var a1 = document.getElementsByClassName('row1');
            i = Math.floor(Math.random() * 5);
            b1.prepend(a1[i]);
        }
        if (check >= -2) {
            var b2 = document.getElementById('column2');
            var a2 = document.getElementsByClassName('row2');
            if (check <= 0 && a2.length == 5) {
                for (var j = 0; j < a2.length; j ++) {
                    if (a2[j].innerText == final) {
                        var add1 = a2[j].cloneNode(true);
                        var add2 = a2[j].cloneNode(true);
                        add1.id = "row26";
                        add2.id = "row27";
                        b2.appendChild(add1);
                        b2.appendChild(add2);
                        break;
                    }
                }
            }
            i = Math.floor(Math.random() * a2.length);
            b2.prepend(a2[i]);
        }
        if (check >= -4) {
            var b3 = document.getElementById('column3');
            var a3 = document.getElementsByClassName('row3');
            if (check <= -2 && a3.length == 5) {
                for (var j = 0; j < a3.length; j ++) {
                    if (a3[j].innerText == final) {
                        var add3 = a3[j].cloneNode(true);
                        var add4 = a3[j].cloneNode(true);
                        add3.id = "row36";
                        add4.id = "row37";
                        b3.appendChild(add3);
                        b3.appendChild(add4);
                        if (document.getElementsByClassName("row2")[1].innerText == final) {
                            var add5 = a3[j].cloneNode(true);
                            add5.id = "row38";
                            b3.appendChild(add5);
                        }
                        break;
                    }
                }
            }
            i = Math.floor(Math.random() * a3.length);
            b3.prepend(a3[i]);
        }
        count ++;
        if (count >= 30 && count < 38 && check > 0) {
            check = Math.floor(Math.random() * 5);
        }
        else {
            if (check <= 0) {
                if (check == 0) {
                    var aa = document.getElementsByClassName('row1');
                    final = aa[1].innerText;
                }
                check --;
                if (check == -5) {
                    document.getElementById('numb').style.animation = "";
                    document.getElementById('notibox').innerText = "Mở quà đê!";
                    document.getElementById('gift').style.display = "block";
                    document.getElementById('giftbutton').style.display = "block";
                    
                    var c1 = document.getElementsByClassName('row1')[1].innerText;
                    var c2 = document.getElementsByClassName('row2')[1].innerText;
                    var c3 = document.getElementsByClassName('row3')[1].innerText;

                    if (c1 == c2 && c1 == c3) {
                        document.getElementById('starbox').style.display = "block";
                        document.getElementById('fireworks').style.display = "block";
                    }
                    else {
                        document.getElementById('starbox').style.display = "none";
                        document.getElementById('fireworks').style.display = "none";
                    }
                    clearInterval(mainl);
                }
            }
            if (count == 38) check = 0;
        }
    }, 100);
}

function opengift() {
    document.getElementById('gift').style.display = "none";
    document.getElementById('giftbutton').style.display = "none";
    document.getElementById('startbutton').style.display = "block";
    document.getElementById('giftcontentbox').style.display = "block";
    document.getElementById('fireworks').style.display = "none";
}

function closegift() {
    document.getElementById('notibox').innerText = "Kéo cần đê!";
    document.getElementById('giftcontentbox').style.display = "none";
}
