
function init() {
    tabla = [
        [ 0, 0, 0 ],
        [ 0, 0, 0 ],
        [ 0, 0, 0 ] 
    ];
    brojOdigranih = 0;
    naPotezu = -1;
}

function setFields() {
    var table = document.getElementById("table");
    fields = table.getElementsByTagName("td");
    
    for (let i = 0; i < fields.length; i++) {
        fields[i].onclick = function () {
            var x = parseInt(i / 3);
            var y = i % 3;
            
            var code = play(x, y);
            refresh();
            
            setTimeout(function () {
                if (code !== -1) {
                    if (code === -3)
                        alert("Pobednik je X");
                    else if (code === 3) 
                        alert("Pobednik je O");
                    else
                        alert("Nereseno");
                }
            }, 1);
            
        };
    }
}

function getImg(znak) {
    if (znak === -1)
        return '<img src="images/iks.png" alt=""/>';
    else if (znak === 1) 
        return '<img src="images/oks.png" alt=""/>';
    else
        return '';
}

function refresh() {
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++)
            fields[3 * i + j].innerHTML = getImg(tabla[i][j]);
}

function play(x, y) {
    if (tabla[x][y] === 0) {
        tabla[x][y] = naPotezu;
        brojOdigranih++;
        
        var d1 = 0, d2 = 0;
        
        for (var i = 0; i < 3; i++) {
            var v = 0, k = 0;
            
            for (var j = 0; j < 3; j++) {
               v += tabla[i][j];
               k += tabla[j][i];
            }
            
            d1 += tabla[i][i];
            d2 += tabla[i][2-i];
            
            if (v === -3 || k === -3) {
                return -3;
            }
            
            if (v === 3 || k === 3) {
                return 3;
            }            
        }
        
        if (d1 === -3 || d2 === -3) {
            return -3;
        }

        if (d1 === 3 || d2 === 3) {
            return 3;
        }
        
        if (brojOdigranih === 9) {
            return 0;
        }
        
        naPotezu = -naPotezu;        
    } else {
        alert("To polje je vec popunjeno!");
    }
    
    return -1;
}

setFields();
init();
refresh();

