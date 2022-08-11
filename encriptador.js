var botonEncriptar = document.querySelector(".boton1");
var botonDesencriptar = document.querySelector(".boton2");
var botonCopiar = document.querySelector(".boton3");
var munieco = document.querySelector(".munieco");
var textoCart = document.querySelector(".texto_cart");
var textoOculto = document.querySelector(".texto_oculto");
var resultado = document.querySelector(".resultado");

botonEncriptar.addEventListener("click",encriptar);
botonDesencriptar.addEventListener("click",desencriptar);
botonCopiar.addEventListener('click',copiar);



function encriptar(){
    ocultarCart()
    resultado.textContent = encriptarTexto(recuperarTexto());
    
}

function desencriptar(){
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto(){
    var texto = document.querySelector(".ingreseTexto");
    return texto.value;
}

function ocultarCart(){
    munieco.classList.add("ocultar");
    textoCart.classList.add("ocultar");
    textoOculto.classList.remove("ocultar");

}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal +texto[i];
        }
       
    }
    return textoFinal;
}


function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3
        }
        else{
            textoFinal = textoFinal +texto[i];
        }
       
    }
    return textoFinal;
}






 
//no tengo idea de como funciona esto 

  function copiar(){

    var texto = document.querySelector(".resultado");
    var seleccion = document.createRange();
    seleccion.selectNodeContents(texto);    
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
  
  }
