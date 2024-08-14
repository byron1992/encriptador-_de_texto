function encriptar(){
    let texto = document.getElementById("texto_a_cambiar").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco  = document.getElementById("muneco"); 

    let textoCifrado=texto /* aqui el texto que recibí del textarea lo estoy cambiando según las indicaciones del reto */
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

                    if (document.getElementById("texto_a_cambiar").value.length!=0){/*  verifico que ingrese texto */
                        document.getElementById("texto_a_cambiar").value=textoCifrado;
                        tituloMensaje.textContent = "El texto ha sido encriptado";
                        parrafo.textContent="";
                        muñeco.src = "./imagenes/encriptado.jpg";
                     } else {
                        muñeco.src = "./imagenes/Muneco.png";
                        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
                        parrafo.textContent="Ingresa el texto que desea encriptar o desencriptar";
                       alert("Debes ingresar texto");
                     }
}