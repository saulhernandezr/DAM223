const pedidos = [];
let pacumulado = 0;
const mensaje = `Hola, bienvenido. Elige tu pedido`;

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

    console.log("\n==========pedidos==========");

    pedidos.forEach((pedido, indice) => {
        console.log(
            `${indice + 1}. ${pedido.nombre} - $${pedido.precio}`
        );
    });

    return pedidos;
}

function totalAcumulado() {
    return pacumulado;
}
function consultarProducto(nombre) {

    const producto = pedidos.find(
        pedido => pedido.nombre.toLowerCase() === nombre.toLowerCase()
    );

    return producto;
}

module.exports = {
    pedidos,
    agregarPedido,
    listarPedidos,
    totalAcumulado,
    consultarProducto
};