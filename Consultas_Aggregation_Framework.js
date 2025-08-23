//Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto).
db.clientes.aggregate([{$unwind: "compras"}, {$groop: {_id: "$compras.producto", totalVendido: {$sum: "compras.cantidad"}}}, {$sort: {totalVendido: -1}}])

//Agrupar clientes por cantidad de compras realizadas.
db.clientes.aggregate([{$project: {nombre: 1, totalcompras: {$size: "$compras"}}}, {$group: {_id: "$totalcompras", clientes: {$push: "$nombre"}}}, {$sort: {_id: -1}}])

//Mostrar el total de ventas por mes (usa $group y $month).
db.ventas.aggregate([{$group: {_id: {$month: "$fecha"}, totalVentas: {$sum: "$total"}, cantidadVentas: {$sum: 1}}}, {$sort: {_id: 1}}])

//Calcular el promedio de precios por categoría de producto.
db.productos.aggregate([{$group: {_id: "$categoria", promedioPrecio: {$avg: "$precio"}, cantidadProductos: {$sum: 1}}}, {$sort: {promedioPrecio: -1}}])

//Mostrar los 3 productos con mayor stock (orden descendente con $sort y $limit).
db.productos.aggregate([{$sort: {stock: -1}}, {$limit: 3}, {$project: {nombre: 1, categoria: 1, stock: 1, precio: 1}}])