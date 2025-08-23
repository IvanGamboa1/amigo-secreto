// Cuando escriba el nombre lo almacene en una lista 
let amigosSecretos = [];

function agregarAmigo(){
    // Obtener el nombre del amigo secreto
    let nombreSecreto = document.getElementById('amigo').value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombreSecreto === "") {
        alert(" Por favor ingresa un nombre");
        return;
    }
    // Agregar el nombre a la lista de amigos secretos
    amigosSecretos.push(nombreSecreto);

    // crear un nuevo elemento de lista y agregarlo a la lista
    let listaAmigos = document.getElementById('listaAmigos');
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreSecreto;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';

}

function sortearAmigo(){
    if (amigosSecretos.length === 0) {
        alert(" No hay amigos secretos para sortear");
        return;
    }
    let amigoSecreto = amigosSecretos[Math.floor(Math.random()*amigosSecretos.length)];
    console.log("Amigo secreto sorteado:", amigoSecreto);

    // el resultado quiero hacerlo con el innerHTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`Amigo secreto sorteado:  ${amigoSecreto}`);
}
    
// muestra en consola cualquier verificacion 
console.log(amigosSecretos);