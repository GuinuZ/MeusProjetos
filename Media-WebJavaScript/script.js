var nota = document.getElementById("nota");
var show = document.getElementById("show");
var btn = document.getElementById("btn-inserir");
var cont = 0;
var array = new Array();

function armazenar(){
    array[cont] = nota.value;
    cont++;
}
function listar(){
    show.innerHTML += `<p>A nota ${cont} é ${array[cont -1 ]}</p>`;
}

function calcularMedia(){
        var tamanho = array.length;
        var media = 0;
        for(i=0;i<tamanho;i++){
            media += Number(array[i]);
        }
        if(!media){
            alert("Sem valores inseridos")
        }else{
                media /= tamanho;
                console.log(media);
                show.innerHTML = `<p>A media é de ${media}</p>`;
            }
}
function limpar(){
    cont = 0;
    media = 0;
    show.innerHTML = " ";
}

function verificar(){
    if(!nota.value){
        alert("Insira uma nota");
    }else{
        armazenar();
        listar();
        nota.value = "";
        nota.focus();
    }

}
nota.addEventListener("keyup", function(){
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
})

