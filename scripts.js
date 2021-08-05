'use strict'

function start() {
    document.getElementById('numb').style.animation = "numbdown 1.5s";
    document.getElementById('startbutton').style.display = "none";
    document.getElementById('notibox').innerText = "Spinning..."
    document.getElementById('gift').style.display = "none";
    document.getElementById('giftbutton').style.display = "none";
    var color = Math.floor(Math.random() * 6);
    var colorlist = ["#064D78", "#1482C4", "#12782E", "#00C436", "#0C7867", "#0AC4A6"];
    var tilelist = ["#DE977A", "#C4585A", "#DE977A", "#C4585A", "#DE977A", "#C4585A"];
    document.getElementById('gift').style.backgroundColor = colorlist[color];
    var tiles = document.getElementsByClassName('tile');
    tiles[0].style.backgroundColor = tilelist[color];
    tiles[1].style.backgroundColor = tilelist[color];
    var i;
    var count = 0;
    var check = 1;
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
            i = Math.floor(Math.random() * 5);
            b2.prepend(a2[i]);
        }
        if (check >= -4) {
            var b3 = document.getElementById('column3');
            var a3 = document.getElementsByClassName('row3');
            i = Math.floor(Math.random() * 5);
            b3.prepend(a3[i]);
        }
        count ++;
        if (count >= 30 && count < 38 && check > 0) {
            check = Math.floor(Math.random() * 5);
        }
        else {
            if (check <= 0) {
                check --;
                if (check == -5) {
                    clearInterval(mainl);
                    document.getElementById('numb').style.animation = "";
                    //document.getElementById('startbutton').style.display = "block";
                    document.getElementById('notibox').innerText = "Take your gift!";
                    document.getElementById('gift').style.display = "block";
                    document.getElementById('giftbutton').style.display = "block";
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
}

function closegift() {
    document.getElementById('giftcontentbox').style.display = "none";
}
