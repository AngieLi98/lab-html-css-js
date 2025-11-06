document.getElementById("incrementar").addEventListener('click', function(){
    const contador = document.getElementById("contador");
    const suma = contador + 1
    contador.innerHTML = suma
})