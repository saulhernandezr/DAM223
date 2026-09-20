const mensaje = `Hola, bienvenido. Elige tu pedido`;
const pedidos = [];
let pacumulado = 0;
console.log("===============================");
console.log(mensaje);


function agregarPedido(nombre, precio) {
    pedidos.push({
        nombre: nombre,
        precio: precio
    });
    pacumulado += precio;

    console.log(`Pedido agregado: ${nombre} - Precio: $${precio}`);
    console.log(`Total acumulado: $${pacumulado}`);
}

function listarPedidos() {
    return pedidos;
}

function totalAcumulado() {
    return pacumulado;
}

module.exports = {
    pedidos,
    agregarPedido,
    listarPedidos,
    totalAcumulado
};