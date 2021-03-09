const emailAdmin = "admin@dens.com";
const passwordAdmin = "admin1234";
var baseDatos = ["admin@dens.com", "admin1234"];


//REGISTAR CUENTAS
function registrar(){

    var registrarUsuario = document.getElementById("correo").value;
    var registrarContrasenia = document.getElementById("passwordregistro").value;

    console.log(registrarUsuario);
    console.log(registrarContrasenia);

    baseDatos.push(registrarUsuario);
    baseDatos.push(registrarContrasenia);

    for (let i = 0; i < baseDatos.length; i++) {
        console.log(baseDatos[i]);
    }
}

//INICIO DE SESION
function iniciosesion (){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    var cont = 0;

    console.log(email);
    console.log(password);

    for (let i = 0; i < baseDatos.length; i++) {
        
        if (i == 0 || i % 2==0) {
            
            if (email == baseDatos[i]) {
                cont++;
            }
        }else{
            
            if (password == baseDatos[i]) {
                cont++;
            }
        }

        console.log(baseDatos[i]);
        console.log(cont);
    }

    if (email == baseDatos[0] && password == baseDatos[1]) {
        
        document.getElementById("presupuesto").style.display = "inline";
        document.getElementById("usuario").innerHTML = email;
        document.getElementById("form").style.display = "none";
        document.getElementById("usuario_mensaje").innerHTML = email;
    }
    
    if (cont % 2 == 0 && cont != 0) {
        
        document.getElementById("presupuesto").style.display = "inline";
        document.getElementById("mensaje").style.display = "block";
    }
}

//CERRAR SESION
function cerrarsesion(){

    document.getElementById("usuario").innerHTML = "Inicio de sesión";
    document.getElementById("form").style.display = "block";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("presupuesto").style.display = "none";

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}