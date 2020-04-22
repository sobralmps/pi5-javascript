function valida(){
    var x = document.forms["formulario"]["nome"].value;
    var y = document.forms["formulario"]["senha"].value;

    if (x == "" || y == ""){
        alert("Existem campos em branco");
    }
    else{
        alert("Cadastro efetuado com sucesso");
    }
}