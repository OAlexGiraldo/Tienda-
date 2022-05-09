export function ampliarInformacion(evento){

    let producto={}

    producto.foto=evento.target.parentElement.querySelector("img").src
    producto.nombre=evento.target.parentElement.querySelector("h4").textContent
    producto.precio=evento.target.parentElement.querySelector("h3").textContent
    

    let fotoInfo=document.getElementById("fotoInfo")
    fotoInfo.src=producto.foto

    let tituloFoto=document.getElementById("nombreInfo")
    tituloFoto.textContent=producto.nombre
     
    let precio=document.getElementById("precioInfo")
    precio.textContent=producto.precio

    let total=document.getElementById("totalpesos")
    total.textContent=producto.total


   return producto
 

}
