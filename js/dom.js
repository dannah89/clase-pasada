var nombre = "";
var apellido = "";
var telefono = "";
var correo = "";
var edad = "";


function recuperarDatos() {
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    edad = document.getElementById("edad").value;


    var contenedores = document.getElementsByTagName("div");
    console.log(contenedores);
    if(contenedores.length > 0 ) {
        document.body.removeChild(contenedores[0]);
    }
    var contenedor = document.createElement("div");
    document.body.appendChild(contenedor);

    var parrafoNombre = document.createElement("p");
    var contenidoParrafoNombre= document.createTextNode("su nombre es: " + nombre);
    parrafoNombre.appendChild(contenidoParrafoNombre);

    var parrafoApellido = document.createElement("p");
    var contenidoParrafoApellido= document.createTextNode("su apellido es: " + apellido);
    parrafoApellido.appendChild(contenidoParrafoApellido);

    var parrafoTelefono = document.createElement("p");
    var contenidoParrafoTelefono= document.createTextNode("su numero telefonico es: " + telefono);
    parrafoTelefono.appendChild(contenidoParrafoTelefono);

    var parrafoCorreo = document.createElement("p");
    var contenidoParrafoCorreo= document.createTextNode("su correo electronico es: " + correo);
    parrafoCorreo.appendChild(contenidoParrafoCorreo);

    var parrafoEdad= document.createElement("p");
    var contenidoParrafoEdad = document.createTextNode("su edad es:" + edad);
    parrafoEdad.appendChild(contenidoParrafoEdad);
var divContenedor = document.getElementsByTagName("div");


    divContenedor[0].appendChild(parrafoNombre);
    divContenedor[0].appendChild(parrafoApellido);
    divContenedor[0].appendChild(parrafoTelefono);
    divContenedor[0].appendChild(parrafoCorreo);
    divContenedor[0].appendChild(parrafoEdad);


    console.log(nombre,apellido,telefono,correo,edad);
}