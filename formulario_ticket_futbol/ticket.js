let carrito =
  JSON.parse(localStorage.getItem("carrito")) || [];

function agregarProducto(carrito, ticket) {

  return [...carrito, ticket];

}

function eliminarProducto(carrito, id) {

  return carrito.filter(
    ticket => ticket.id !== id
  );

}

function eliminarDelCarrito(id) {

  carrito = eliminarProducto(carrito, id);

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  mostrarCarrito();

}

function calcularTotal(carrito) {

  return carrito.reduce(
    (total, ticket) =>
      total + (ticket.precio * ticket.cantidad),
    0
  );

}

function agregarAlCarrito() {

  if (!validarFormulario()) {
  return;
}

  const id =
    Number(document.getElementById("id").value);

  const nombre =
    document.getElementById("nombre").value;

  const identificacion =
    Number(document.getElementById("identificacion").value);

  const correo =
    document.getElementById("correo").value;

  const telefono =
    document.getElementById("telefono").value;

  const partido =
    document.getElementById("partido").value;

  const tipoEntrada =
    document.getElementById("tipoEntrada");

  const precio =
    Number(tipoEntrada.value);

  const tipo =
    tipoEntrada.options[tipoEntrada.selectedIndex].text;

  const cantidad =
    Number(document.getElementById("cantidad").value);

  const ticket = {
    id,
    nombre,
    identificacion,
    correo,
    telefono,
    partido,
    tipoEntrada: tipo,
    precio,
    cantidad
  };

  carrito = agregarProducto(carrito, ticket);

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  document.getElementById("id").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("identificacion").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("partido").value = "";
  document.getElementById("tipoEntrada").selectedIndex = 0;
  document.getElementById("cantidad").value = "";

  mostrarCarrito();

}

function validarFormulario() {

  const id =
    document.getElementById("id").value;

  const nombre =
    document.getElementById("nombre").value;

  const identificacion =
    document.getElementById("identificacion").value;

  const correo =
    document.getElementById("correo").value;

  const telefono =
    document.getElementById("telefono").value;

  const partido =
    document.getElementById("partido").value;

  const tipoEntrada =
    document.getElementById("tipoEntrada").value;

  const cantidad =
    document.getElementById("cantidad").value;

  if (
    id === "" ||
    nombre === "" ||
    identificacion === "" ||
    correo === "" ||
    telefono === "" ||
    partido === "" ||
    tipoEntrada === "" ||
    cantidad === ""
  ) {

    document.getElementById("mensaje").innerHTML = `
      <p class="error">
        Debe rellenar todos los campos.
      </p>
    `;

    return false;
  }

  document.getElementById("mensaje").innerHTML = "";

  return true;
}

function mostrarCarrito() {

  const total =
    calcularTotal(carrito);

  document.getElementById("resultado")
    .innerHTML = `
      <h3>Boletas compradas:</h3>

      <ul>
        ${carrito.map(ticket => `
          <li>

            <div>

              <strong>${ticket.nombre}</strong><br>

              Documento:
              ${ticket.identificacion}<br>

              Partido:
              ${ticket.partido}<br>

              Tipo:
              ${ticket.tipoEntrada}<br>

              Cantidad:
              ${ticket.cantidad}<br>

              Valor:
              $${ticket.precio * ticket.cantidad}

            </div>

            <div class="acciones">

            <button class="btn-imprimir"
                onclick="imprimirTicket(${ticket.id})">
                Imprimir
            </button>

            <button class="btn-eliminar"
                onclick="eliminarDelCarrito(${ticket.id})">
                Eliminar
            </button>

            </div>

          </li>
        `).join("")}
      </ul>

      <p>Total: $${total.toLocaleString()}</p>

    `;

}

function imprimirTicket(id) {

  const ticket = carrito.find(
    ticket => ticket.id === id
  );

  const ventana = window.open("", "_blank");

  ventana.document.write(`
      <!DOCTYPE html>
        <html>
        <head>
          <title>Ticket Mundial</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="ticket.css">
        </head>

      <body>

      <div class="ticket">

        <div class="ticket-header">

          <h1>COPA MUNDIAL FIFA</h1>

          <h3>TICKET OFICIAL</h3>

          <div class="encabezado">
              <img src="img/mundial.jpg" alt="Logo mundial">
          </div>

      </div>

      <div class="ticket-body">

          <p><strong>Nombre:</strong> ${ticket.nombre}</p>

          <p><strong>Documento:</strong> ${ticket.identificacion}</p>

          <p><strong>Partido:</strong> ${ticket.partido}</p>

          <p><strong>Tipo de Entrada:</strong> ${ticket.tipoEntrada}</p>

          <p><strong>Cantidad:</strong> ${ticket.cantidad}</p>

          <p><strong>Total:</strong>
          $${(ticket.precio * ticket.cantidad).toLocaleString()}</p>

      </div>

      <div class="ticket-footer">

          <p>Código de Reserva</p>

          <div class="codigo">
              WM-${ticket.id}
          </div>

      </div>

  </div>

        </body>

        </html>
    `);

  ventana.document.close();

  ventana.onload = function () {
      ventana.print();
  };

}

mostrarCarrito();



