function encriptar(){
    let texto = document.getElementById("texto_a_encriptar").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco  = document.getElementById("muneco");

    let textoCifrado=texto
                        .replace(/a/gi, "ai")
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

                    if (texto.length!=0){
                        texto=textoCifrado;
                        tituloMensaje.textContent = "El texto ha sido encriptado";
                        parrafo.textContent="";
                        muñeco.src = "./imagenes/encriptado.jpg";
                     } else {
                       muñeco.src = "./imagenes/Muneco.png";
                       alert("Debes ingresar texto");
                     }
}