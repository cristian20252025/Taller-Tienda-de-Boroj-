🍃 Taller Tienda de Borojó
📌 Descripción

Este proyecto implementa una base de datos MongoDB para una tienda de productos derivados del borojó, donde se gestionan:

Productos 🍎

Clientes 👥

Ventas 🛒

Proveedores 🚚

Inventario 📦

Además, se incluyen consultas de ejemplo en Mongo Shell para practicar operaciones CRUD, transacciones, agregaciones, expresiones regulares, manejo de arrays, índices y funciones definidas.

⚙️ Tecnologías utilizadas

MongoDB (Base de datos NoSQL orientada a documentos)

JavaScript (Mongo Shell) para la escritura de queries y funciones

MongoDB Aggregation Framework para consultas avanzadas

🗂 Estructura del proyecto
📂 Tienda-de-Borojo
│── Datos.js                        # Creación de la BD y carga de datos iniciales
│── consultas_lecturas.js            # Consultas de lectura básicas
│── consultas_actualizacion.js       # Consultas de actualización (updateOne, updateMany)
│── consulta_eliminacion.js          # Eliminación de registros
│── consulta_inserciones.js          # Inserciones adicionales de clientes y productos
│── consultas_expresiones_regulares.js # Consultas con regex
│── consultas_sobre_arrays.js        # Consultas con arreglos ($all, $size, $expr)
│── consultas_aggregation_framework.js # Consultas con Aggregation Pipeline
│── funciones_definidas.js           # Definición de funciones en db.system.js
│── indexación.js                    # Creación de índices
│── transacciones.js                 # Ejemplos de transacciones (ventas, inventario, devoluciones)
│── README.md                        # Documentación del proyecto

🚀 Instalación y uso

Clonar el repositorio o copiar los archivos en tu entorno local.

Levantar MongoDB en tu sistema (asegúrate de tenerlo instalado y corriendo en localhost:27017).

Cargar la base de datos ejecutando en la terminal de Mongo:
mongo < Datos.js

Ejecutar consultas de prueba:
mongo < consultas_lecturas.js

📊 Contenido por archivo
📌 1. Datos.js

Crea la base de datos tienda-de-borojo.

Define colecciones: productos, clientes, ventas, proveedores, inventario.

Inserta datos iniciales en cada colección.

📌 2. consultas_lecturas.js

Consultas básicas como:

Productos con stock mayor a 20.

Clientes sin compras registradas.

📌 3. consultas_actualizacion.js

Ejemplos de updateOne y updateMany:

Incrementar stock de un producto.

Agregar tags a múltiples documentos.

📌 4. consulta_eliminacion.js

Ejemplos de deleteOne y deleteMany:

Eliminar clientes por correo.

Eliminar productos con stock bajo.

📌 5. consulta_inserciones.js

Ejemplos de insertOne:

Insertar productos nuevos.

Insertar clientes nuevos.

📌 6. consultas_expresiones_regulares.js

Uso de regex:

Buscar productos cuyo nombre comience por Boro.

Buscar clientes con nombres que contengan cierta letra.

📌 7. consultas_sobre_arrays.js

Consultas con arreglos:

Clientes con determinada preferencia ($all).

Productos con múltiples tags ($size).

📌 8. consultas_aggregation_framework.js

Ejemplos de aggregation pipeline:

Productos más vendidos.

Total de ventas por mes.

Promedio de precios por categoría.

Top 3 productos con más stock.

📌 9. funciones_definidas.js

Funciones almacenadas en db.system.js:

calcularDescuento(precio, porcentaje) → aplica descuento.

clienteActivo(idCliente) → verifica si un cliente tiene más de 3 compras.

verificarStock(productoId, cantidad) → valida si hay stock suficiente.

📌 10. indexación.js

Índices creados para mejorar rendimiento:

Índice en nombre de productos.

Índice compuesto en categoria y precio.

Índice único en email de clientes.

📌 11. transacciones.js

Ejemplos de operaciones transaccionales:

Registrar una venta (descontar stock + guardar venta).

Registrar entrada de inventario (insertar lote + actualizar stock).

Registrar una devolución (aumentar stock + eliminar venta).

✅ Ejemplos de ejecución
// Productos con más de 20 unidades en stock
db.productos.find({stock: {$gt: 20}})

// Clientes con preferencias "natural" y "orgánico"
db.productos.find({tags: {$all: ["natural", "orgánico"]}})

// Promedio de precios por categoría
db.productos.aggregate([
  {$group: {_id: "$categoria", promedioPrecio: {$avg: "$precio"}}}
])

👨‍💻 Autores

Cristian Pérez
Juan Sebastian Gualdron
