const historial = document.getElementById('historial');

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarColor() {
    const nuevoColor = generarColorAleatorio();
    document.body.style.backgroundColor = nuevoColor;

    const item = document.createElement('li');
    item.textContent = nuevoColor;
    item.style.color = nuevoColor;
    historial.appendChild(item);
}

function limpiarHistorial() {
    historial.innerHTML = '';
}