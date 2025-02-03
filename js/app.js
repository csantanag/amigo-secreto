// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaAmigos = [];
let inputHTML = document.getElementById("amigo");

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Debe escribir un nombre");
        return;
    }

    console.log(typeof(nombreAmigo));
    console.log(`Amigo: ${nombreAmigo}`);
  
    listaAmigos.push(nombreAmigo)

    // Crear un nuevo <li>
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombreAmigo;
    // Agregar el <li> a la lista <ul>
    document.getElementById("listaAmigos").appendChild(nuevoElemento);
    
    // Limpiar el input después de agregar
    inputHTML.value = "";
    return
  }

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const generaNumero = Math.floor(Math.random()*(listaAmigos.length));
    console.log(`Número generado: ${generaNumero}`);

   // Crear un nuevo <li>
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Amigo secreto: " + listaAmigos[generaNumero];
    // Agregar el <li> al resultado <ul>
    document.getElementById("resultado").appendChild(nuevoElemento);

    // Crear un nuevo <li>
    const f5 = document.createElement("li");
    f5.innerHTML = "<hr> Presione F5 para jugar nuevamente <br> Se han bloqueado los botones";
    // Agregar el <li> al resultado <ul>
    document.getElementById("f5").appendChild(f5);

    // Deshabilita botones - Fin
    document.getElementById("botonAgrega").setAttribute("disabled", true)
    document.getElementById("botonSortea").setAttribute("disabled", true)

    return
  }
