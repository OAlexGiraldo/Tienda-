import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro=document.getElementById("ingresar")
let modalregistro=new bootstrap.Modal(document.getElementById('modalregistro'))
let modalmensaje=new bootstrap.Modal(document.getElementById('modalmensaje'))
let modaltext=document.getElementById("textModal")


botonregistro.addEventListener("click",function(evento){

    evento.preventDefault()
   
    
    let correo =document.getElementById("Email").value
    let password=document.getElementById("Password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Exito en el registro")
        modaltext.textContent="Exito en el registro"
        modalmensaje.show()
        let formulario=document.getElementById("formularioregistro")
        formulario.reset() 
        setTimeout(function(){
            modalregistro.hide()
        },10000)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log("Fallo "+errorMessage)
        modaltext.textContent="Fallamos: "+errorMessage
        modalmensaje.show()
        setTimeout(function(){
            modalmensaje.hide()
        },10000)
        
    });
    
   

})