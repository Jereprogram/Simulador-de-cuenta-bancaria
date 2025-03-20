// Variable global que simula el saldo de la cuenta bancaria.
let saldo = 0.0;

function depositar() {
  let montoStr = prompt("Ingrese el monto a depositar:");
  let monto = parseFloat(montoStr);
  if (isNaN(monto) || monto <= 0) {
    alert("Error: Ingrese un monto válido.");
    return;
  }
  saldo += monto;
  document.getElementById("resultado").innerText = `Depósito exitoso. Saldo actual: $${saldo.toFixed(2)}`;
}

function retirar() {
  let montoStr = prompt("Ingrese el monto a retirar:");
  let monto = parseFloat(montoStr);
  if (isNaN(monto) || monto <= 0) {
    alert("Error: Ingrese un monto válido.");
    return;
  }
  if (monto > saldo) {
    document.getElementById("resultado").innerText = "Error: Fondos insuficientes.";
    return;
  }
  saldo -= monto;
  document.getElementById("resultado").innerText = `Retiro exitoso. Usted a retirado: $${monto.toFixed(2)}`;
}

function consultarSaldo() {
  document.getElementById("resultado").innerText = `Saldo actual: $${saldo.toFixed(2)}`;
}

function salir() {
  document.getElementById("resultado").innerText = "Gracias por todo, vuelva pronto";
}
