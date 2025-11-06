document.getElementById("incrementar").addEventListener('click', function(){
    const contador = document.getElementById("contador");
    let suma = parseInt(contador.textContent)
    suma++
    contador.textContent = suma

    if(suma === 10){
        contador.style.backgroundColor = "blue"
    }
})

document.getElementById("disminuir").addEventListener('click', function(){
    const contador = document.getElementById("contador");
    let resta = parseInt(contador.textContent)
    resta--
    contador.textContent = resta
})