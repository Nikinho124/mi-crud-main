import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  // Estados locales para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');

  //Cuando cambie itemToEdit (modo edición), llenamos los campos
  useEffect(() => {
    if (itemToEdit) {
      setNombre(itemToEdit.nombre);
      setAsignatura(itemToEdit.asignatura);
      setPromedio(itemToEdit.promedio);
    } else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  }, [itemToEdit]);

  //Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !asignatura.trim() || promedio === '') return;

    const promedioNum = parseFloat(promedio);
    if (isNaN(promedioNum) || promedioNum < 1 || promedioNum > 7) {
      alert('El promedio debe estar entre 1.0 y 7.0');
      return;
    }

    addOrUpdateItem({ nombre, asignatura, promedio: promedioNum });

    //Limpiar formulario
    setNombre('');
    setAsignatura('');
    setPromedio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del alumno"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Asignatura"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Promedio (1.0 a 7.0)"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)}
        step="0.1"
        min="1"
        max="7"
      />
      <button type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default Form;

