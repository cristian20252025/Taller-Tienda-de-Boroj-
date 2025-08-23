//eliminar el cliente que tenga el correo "juan@email.com"
db.clientes.deleteOne({email: "juan@email.com"})

//eliminar todos los productos con stock menor a 5
db.productos.deleteMany({stock: {$lt: 5}})

