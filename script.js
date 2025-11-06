document.getElementById("incrementar").addEventListener('click', function(){
    const contador = document.getElementById("contador");
    let suma = parseInt(contador.textContent)
    suma++
    contador.textContent = suma
})