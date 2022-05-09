
export function pintarTienda(){

    let productosBD = [

        { foto: 'img/Tienda1.webp', nombre: "Computador Portatil Acer", precio: 1500000,descripcion:"A515-54-55JD CI5 4GB 256GB SSD 15.6, Negro"},
        { foto: 'img/Tienda2.webp', nombre: "Computador Portatil HP", precio: 1449000,descripcion:"14-CF2062 CI3 4GB 256GB SSD 14 Gris"},
        { foto: 'img/Tienda3.webp', nombre: "Computador Aio Lenovo", precio: 1770000,descripcion:"24ADA6 ATHLON 4GB 256GB SSD 24 W11 Blanco"},
        { foto: 'img/Tienda4.webp', nombre: "Computador Aio Lenovo", precio: 2000000,descripcion:"24ALC6 RZ5 8GB 512GB SSD 24 W11 Blanco" },
        { foto: 'img/Tienda5.webp', nombre: "Computador Aio Lenovo", precio: 1995000,descripcion:"24ALC6 RZ7 8GB 512GB SSD 24 W11 Blanco" },
        { foto: 'img/Tienda6.webp', nombre: "Computador Aio HP", precio: 12250000,descripcion:"24-DF0006 Pentium 4GB 1TB 23,8 Blanco" },
        { foto: 'img/Tienda7.webp', nombre: "Portátil HP", precio: 1500000,descripcion:"14-CF2538 CEL 4GB 128GB 14 + funda + audifonos + mouse Gris"},
        { foto: 'img/Tienda8.webp', nombre: "Computador Aio HP", precio: 1350000,descripcion:"Celeron 21-B0001 4GB Ram 500GB HDD 20.7 Negro"},
        { foto: 'img/Tiienda9.webp', nombre: "Computador Aio HP", precio: 1187000,descripcion:"24-DD0005LA Intel Ci5 8GB 256GB SSD+1TB 24 Negro"},
        { foto: 'img/Tienda10.webp', nombre: "Portátil HP", precio: 1770000,descripcion:"15-DY2059 CI3 8GB 256GB SSD 15.6 Silver + Office + ldentificador de huella"},
        { foto: 'img/Tienda11.webp', nombre: "Portátil HP", precio: 1195000,descripcion:" 15-EH0008 Pavilion RZ5 8GB 256GB SSD 15,6" },
        { foto: 'img/Tienda12.webp', nombre: "Portátil HP 14", precio: 1250000,descripcion:"14-DQ2022 CI3 8GB 256GB SSD 14 Silver" },
        { foto: 'img/tienda13.webp', nombre: "Portátil HP 15", precio: 1500000,descripcion:"15-EH0005 RZ3 8GB 256GB SSD 15 6 Silver"},
        { foto: 'img/tienda14.webp', nombre: "Portatil convertible HP", precio: 2350000,descripcion:"14-DY0007 pavilion CI5 8GB 256GB SSD 14"},
        { foto: 'img/tienda15.webp', nombre: "Portátil HP 14", precio: 187000,descripcion:"14-CF2066 CI3 8GB 512GB SSD 14 Silver"},
    ]
    
    //Necesito recorrer un arreglo en JS
    
    //1.Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        /*console.log(producto.foto)
        console.log(producto.nombre)
        console.log(producto.precio)*/
    
        //2. pintando etiquetas
    
        //div con la clase col
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //div con las clases card h-100
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        //img con la clase card-img-top
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        //h4 con la clase text-center
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        //h1 con clase text-center
        let precio=document.createElement("h3")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

        //parrafo con clase text-center
        let parrafo=document.createElement("p")
        parrafo.classList.add("text-center")
        parrafo.textContent=producto.descripcion

        //creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
        


        //3. PADRES E HIJOS
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(parrafo)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
    
    //




}




