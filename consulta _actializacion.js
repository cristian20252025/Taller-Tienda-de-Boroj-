//Aumentar 10 unidades el estock del producto "borojo deshidratado"
db.productos.updateOne({nombre: ("Borojo deshidratado")}, {$inc: {stock: 10}})

//Añadir el tag "bajo azucar" a todos los productos de la categoria bebida
db.productos.updateMany({categoria: "Bebida"}, {$push: {tags: "bajo azucar"}})

