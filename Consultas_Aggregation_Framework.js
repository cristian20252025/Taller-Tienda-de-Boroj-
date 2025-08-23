//Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto).
db.clientes.aggregate([{$unwind: "compras"}, {$groop: {_id: "$compras.producto", totalVendido: {$sum: "compras.cantidad"}}}, {$sort: {totalVendido: -1}}])

//Agrupar clientes por cantidad de compras realizadas.
db.clientes.aggregate([{$project: {nombre: 1, totalcompras: {$size: "$compras"}}}, {$group: {_id: "$totalcompras", clientes: {$push: "$nombre"}}}, {$sort: {_id: -1}}])

//Mostrar el total de ventas por mes (usa $group y $month).
db.clientes.aggregate()