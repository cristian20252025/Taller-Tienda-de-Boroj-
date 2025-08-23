//Definir una función calcularDescuento(precio, porcentaje) que devuelva el precio con descuento aplicado.
db.system.js.save({_id: "calcularDescuento", value: function(precio, porcentaje) { return precio * (1 - porcentaje/100); }})

//Definir una función clienteActivo(idCliente) que devuelva true si el cliente tiene más de 3 compras registradas.
db.system.js.save({_id: "clienteActivo", value: function(idCliente) { var cliente = db.clientes.findOne({_id: idCliente}); return cliente && cliente.compras && cliente.compras.length > 3; }})

//Definir una función verificarStock(productoId, cantidadDeseada) que retorne si hay suficiente stock.
db.system.js.save({_id: "verificarStock", value: function(productoId, cantidadDeseada) { var producto = db.productos.findOne({_id: productoId}); return producto && producto.stock >= cantidadDeseada; }})