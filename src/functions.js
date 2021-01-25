const largoCadena = 3;
var bbdd = require('./bbdd')

exports.isMutant = function (req){
    var dna = req.dna
    var cadenaMutante = 0
    cadenaMutante = vertical(dna)
    if (cadenaMutante > 1) {
        bbdd.insert(dna, 1)
        return true;
    }
    cadenaMutante += horizontal(dna)
    if (cadenaMutante > 1) {
        bbdd.insert(dna, 1)
        return true;
    }
    cadenaMutante += diagonal(dna)
    if (cadenaMutante > 1) {
        bbdd.insert(dna, 1)
        return true;

    }else{
        bbdd.insert(dna, 0)
        return false
    }
}

function horizontal(dna){
    coincidencia = 0;
    cadenaMutante = 0;
    for (let i = 0; i < dna.length; i++) {
        for (let j = 0; j < dna[i].length; j++) {
            if (j < dna[i].length-largoCadena || j >= dna[i].length-largoCadena && coincidencia != 0) {
    
                if (dna[i][j] === dna[i][j+1]) {
                    coincidencia ++;
                }else{
                    coincidencia = 0;
                }
    
                if (coincidencia === largoCadena) {
                    cadenaMutante ++;
                    coincidencia = 0;
                }
    
            }else{
                break
            }
        }

    }
    

    return cadenaMutante;
}

function vertical(dna){
    coincidencia = 0;
    cadenaMutante = 0;
    for (let j = 0; j < dna[0].length; j++) {
        for (let k = 0; k < dna.length; k++) {
            if (k < dna.length-largoCadena || k >= dna.length-largoCadena && coincidencia != 0) {

                if (dna[k][j] === dna[k+1][j]) {
                    coincidencia ++;
                }else{
                    coincidencia = 0;
                }
    
                if (coincidencia === largoCadena) {
                    cadenaMutante ++;
                    coincidencia = 0;
                }
    
            }else{
                break
            }
        }
    }
    return cadenaMutante;
}

function diagonal(dna){
    coincidencia = 0;
    cadenaMutante = 0;

    auxDna = new Array(dna.length);
    for (let i = 0; i < auxDna.length; i++) {
        auxDna[i] = new Array(dna[0].length)
    }
    
    for (let i = 0; i < dna.length - largoCadena; i++) {
        for (let j = 0; j < dna[i].length - largoCadena; j++) {
            if (auxDna[i][j] != '1') {
                if (hayDiagonal(dna, dna[i][j], i+1, j+1, 0)) {
                    cadenaMutante ++;
                    cargarArray(auxDna,i,j)
                }
            }
        }
    }

    return cadenaMutante;
}

function hayDiagonal(dna, valor, x, y, coincidencias){
    coincidencia = coincidencias;
    if (valor === dna[x][y]) {
        coincidencia ++;
        if (coincidencia === 3) {
            return true;
        }else{
            if (hayDiagonal(dna,dna[x][y],x+1,y+1, coincidencia)) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

function cargarArray(arr, x, y){
    arr[x][y] = '1';
    arr[x+1][y+1] = '1';
    arr[x+2][y+2] = '1';
    arr[x+3][y+3] = '1';
}