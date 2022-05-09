//IMPORTANDO MODULOS
import {pintarTienda} from './tiendallenado.js'
import {ampliarInformacion} from './apliarInfo.js'
import {pintarCarrito} from './pintarCarrito.js';



//crear un objeto vacio
let producto={}

//GLOBAL MODAL

//Llamando al modulo de pintar
pintarTienda()
let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
let modalVenta = new bootstrap.Modal(document.getElementById('resumenCarrito'))
//1. Lanzando el modal para ampliar info
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
        //cargar informaciond el producto dentro del modal
        producto=ampliarInformacion(evento)
        modalinfo.show()
    }
    modalinfo.hide()
})

//detectar la accion de añadir al carrito
//2. carrito es un arreglo de productos (arreglo de objetos)
let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){
    console.log("estoy añadiendo al carrito")


    //1. capturar la cantidad del producto
    let cantidad=document.getElementById("cantidadProducto").value
    
    //2. agrego la cantidad al objeto Producto
    producto.cantidad=cantidad

    //3. agregar el producto al carrito
    producto.subtotal=(producto.cantidad * producto.precio)
    carrito.push(producto)
    console.log("oe")
        console.log(carrito)
         //LLENAMOS EL CARRITO

    //4. calculo la sumatoria de cantidades
    let suma=0
    carrito.forEach(function(producto){
       
        suma=suma+Number(producto.cantidad)
    })
    pintarCarrito(suma);
    modalinfo.hide()

})

//3. Limpiar Carrito
let limpiarCarro = document.getElementById("limpiar")
limpiarCarro.addEventListener("click" , function(evento){
    carrito=[]
    let capsula = document.getElementById("capsula")
    capsula.textContent = 0
    capsula.classList.add("invisible")
})

//4. Ver resumen de venta 
let botonCarrito=document.getElementById("botoncarrito")
botonCarrito.addEventListener("click",function(evento){

    let contenedor=document.getElementById("contenedorventa")
    


    //Borrar el contenido HTML de una seccion
    contenedor.innerHTML=""

    //Recorrer el carrito para pintar los productos en la factura
    carrito.forEach(function(producto){

        //TRAVERSING
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let nombre=document.createElement("h4")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
    
        let precio=document.createElement("h3")
        precio.classList.add("text-center")
        precio.textContent= " Precio "+producto.precio

        let cantidad=document.createElement("h6")
        cantidad.textContent= "cantidad: "+ producto.cantidad

        let subtotal=document.createElement("h6")
        subtotal.textContent = "sub-total: "+ (producto.cantidad * producto.precio)
        
        

        

        let totalpesosneto=0;
        carrito.forEach(function(producto){
            totalpesosneto=totalpesosneto+Number(producto.subtotal)

            producto.totalpesosneto = totalpesosneto

        });
        let totalpesos=document.getElementById("totalpesos")
        totalpesos.textContent=totalpesosneto+"$"
        console.log(totalpesos)

        


        let btnpesoDolar = document.getElementById("pasarUsd")
        btnpesoDolar.addEventListener("click", function(){

        let cambio = 0
        carrito.forEach(function(producto){
        cambio = cambio + Number(producto.totalpesosneto) * 4049
        //agregamos el atributo toatal a producto 
        producto.totaldolares = cambio
    })

         let dollars = document.getElementById("valuetotaldolar")
        dollars.textContent= cambio
        console.log(dollars)

    //ya con el calculo en dolares quitamos el taributo invisible 
        let USDolares = document.getElementById("TotCOL")
         USDolares.classList.remove("invisible")
    //al mostrar la etiqueta en dolares volveremos invisible la etiqueta en pesos
         let COLpesos = document.getElementById("TotCOL")
        COLpesos.classList.add("invisible")



    //agregamos el atributo total en dolares a producto 
    producto.totalDolares = dollars
    console.log(cantidad)
        })

        //PADRES E HIJOS
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)
        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)
    })

    modalVenta.show()  
})