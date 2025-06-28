import React from "react";

function getApreciacion(promedio) {
  if (promedio < 4.0) return 'Deficiente';
  if (promedio < 5.6) return 'Con mejora';
  if (promedio < 6.5) return 'Buen trabajo';
  return 'Destacado';
}

function Item({ item, deleteItem, editItem }) {
  return (
    <li>
      <p><strong>Nombre:</strong> {item.nombre}</p>
      <p><strong>Asignatura:</strong> {item.asignatura}</p>
      <p><strong>Promedio:</strong> {item.promedio}</p>
      <p><strong>Apreciación:</strong> {getApreciacion(item.promedio)}</p>
      <button onClick={() => editItem(item)}>Editar</button>
      <button onClick={() => deleteItem(item.id)}>Eliminar</button>
    </li>
  );
}

export default Item;
