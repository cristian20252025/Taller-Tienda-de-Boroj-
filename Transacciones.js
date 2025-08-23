const session = db.getMongo().startSession();

// 1.Simular una venta:
session.startTransaction();
try {
    // Descontar del stock
    db.productos.updateOne(
        { _id: productoId },
        { $inc: { stock: -cantidad } }
    );
    
    // Insertar la venta
    db.ventas.insertOne({
        clienteId: clienteId,
        productos: [{ productoId: productoId, cantidad: cantidad }],
        fecha: new Date(),
        total: precioTotal
    });
    
    session.commitTransaction();
} catch (error) {
    session.abortTransaction();
    throw error;
}



//Simular la entrada de nuevo inventario:
session.startTransaction();
try {
    // Insertar en inventario
    db.inventario.insertOne({
        productoId: productoId,
        lote: loteNumero,
        cantidad: cantidad,
        entrada: new Date()
    });
    
    // Aumentar stock del producto
    db.productos.updateOne(
        { _id: productoId },
        { $inc: { stock: cantidad } }
    );
    
    session.commitTransaction();
} catch (error) {
    session.abortTransaction();
    throw error;
}



//Hacer una operación de devolución:
session.startTransaction();
try {
    // Aumentar stock
    db.productos.updateOne(
        { _id: productoId },
        { $inc: { stock: cantidad } }
    );
    
    // Eliminar la venta
    db.ventas.deleteOne({ _id: ventaId });
    
    session.commitTransaction();
} catch (error) {
    session.abortTransaction();
    throw error;
}