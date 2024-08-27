let codigo = ['ai','enter','imes','ober','ufat'];
let letras = ['a','e','i','o','u'];

function mostrarResultado(){
    document.getElementById("resultado").style.display = "initial";
    document.getElementById("inicio").style.display = "none";
}

function asignarTexto(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar(){
    let mensaje = document.getElementById('textoIngresado').value;
    let arr = mensaje.split('');
    let idx = 0;
    
    for(let i=0;i<letras.length;i++){
        idx = arr.indexOf(letras[i]);
        while(idx != -1){
            arr[idx] = codigo[i];
            idx = arr.indexOf(letras[i],idx+1);
        }
    }

    let mensajeEncriptado = arr.toString();

    mensajeEncriptado = mensajeEncriptado.replace(/,/gi, '');
    
    mostrarResultado();
    asignarTexto('salida',mensajeEncriptado);
    
}

function desencriptar(){
    let mensaje = document.getElementById('textoIngresado').value;

    mostrarResultado();

    for(let i=0;i<letras.length;i++){
        mensaje = mensaje.replaceAll(codigo[i],letras[i]);  
    }

    mostrarResultado();
    asignarTexto('salida',mensaje);
}

function copiar(){
    let portapapeles = document.getElementById('salida');

    navigator.clipboard.writeText(portapapeles.textContent);
}