'use strict'

function start() {
    document.getElementById('numb').style.animation = "numbdown 1.5s";
    document.getElementById('startbutton').style.display = "none";
    var i;
    var count = 0;
    var check = 1;
    var mainl = setInterval(function() {
        if (check >= 0) {
            var b1 = document.getElementById('column1');
            var a1 = document.getElementsByClassName('row1');
            i = Math.floor(Math.random() * 2);
            b1.appendChild(a1[i]);
        }
        if (check >= -2) {
            var b2 = document.getElementById('column2');
            var a2 = document.getElementsByClassName('row2');
            i = Math.floor(Math.random() * 2);
            b2.appendChild(a2[i]);
        }
        if (check >= -4) {
            var b3 = document.getElementById('column3');
            var a3 = document.getElementsByClassName('row3');
            i = Math.floor(Math.random() * 2);
            b3.appendChild(a3[i]);
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
                    document.getElementById('startbutton').style.display = "block";
                }
            }
            if (count == 38) check = 0;
        }
    }, 100);
}
