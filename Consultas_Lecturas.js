//Consultar todos los productos que tengan stock mayor a 20 unidades.
db.productos.find({stock: {$gt: 20}})

//consultar todos los clientes que no hayan realizado compras.
db.clientes.find({compras: {$size:0}})

