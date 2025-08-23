//Buscar clientes que tengan "natural" en sus preferencias.
db.clientes.find({preferencias: {$all: ["natural"]}})

//Encontrar productos que tengan al menos los tags "natural" y "orgánico" (usa $all).
db.productos.find({tags: {$all: ["natural", "orgánico"]}})

//Listar productos que tienen más de un tag ($size).
db.products.find({$expr: {$gt: [ { $size: "$tags" }, 1 ]}})
