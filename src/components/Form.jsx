import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  // Estado para controlar el valor del input
  const [inputValue, setInputValue] = useState('');

  // Cuando cambia itemToEdit, actualiza el input (para editar o limpiar)
  useEffect(() => {
    if (itemToEdit) {
      // Si hay un ítem para editar, muestra su valor en el input
      setInputValue(itemToEdit.value);
    } else {
      // Si no, limpia el input
      setInputValue('');
    }
  }, [itemToEdit]);

  // Maneja el envío del formulario
  const handleSumbit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto (recargar la página)
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue); // Agrega o actualiza el ítem
      setInputValue(''); // Limpia el input
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado al escribir
      />
      <button type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'} {/* Texto dinámico según el modo */}
      </button>
    </form>
  );
}

export default Form;
