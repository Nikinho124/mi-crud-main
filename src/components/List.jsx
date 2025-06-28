import React from "react";
import Item from './Item'; 

function List({ items, deleteItem, editItem }) {
  return (
    <ul>
      {/*Recorre la lista de ítems y renderiza un componente <Item> por cada uno */}
      {items.map((item) => (
        <Item
          key={item.id}           
          item={item}             //Pasa el ítem completo al componente
          deleteItem={deleteItem} //eliminar ítems
          editItem={editItem}     //editar ítems
        />
      ))}
    </ul>
  );
}

export default List;
