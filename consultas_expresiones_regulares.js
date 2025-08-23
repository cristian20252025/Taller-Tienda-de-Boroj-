//Buscar productos cuyo nombre empiece por "Boro"
db.productos.find({nombre: {$regex: /^Boro/}})

//Encontrar productos cuyo nombre contenga la palabra "con" (como en “Concentrado de borojó”).
db.productos.find({nombre: {$regex: /con/}})

//Encontrar clientes cuyo nombre tenga la letra "z" (insensible a mayúsculas/minúsculas).
db.clientes.find({nombre: {$regex: /z/i}})

