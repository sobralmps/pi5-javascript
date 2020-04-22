function calcular(){
    var a = document.getElementById('input1').value;
    var b = document.getElementById('input2').value;

    for (var i = 0; i < document.getElementsByName('op').length; i++){
        if (document.getElementsByName('op')[i].checked){
            var c = document.getElementsByName('op')[i].value;
        }
    }

    if (c == 1){
        document.getElementById('resultado').innerHTML = parseInt(a) + parseInt(b);
    }
    else if (c == 2){
        document.getElementById('resultado').innerHTML = parseInt(a) - parseInt(b);
    }
    else if (c == 3){
        document.getElementById('resultado').innerHTML = parseInt(a) * parseInt(b);
    }
    else if (c == 4){
        document.getElementById('resultado').innerHTML = parseInt(a) / parseInt(b);
    }
}