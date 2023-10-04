'use client' //para que no sea procesada en el servidor
import { useState } from "react"
import styles from '@/styles/diario.module.css'; // Importar los estilos desde diario.module.css

const GratitudeBox = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addNote = () => {
    if (newNote.trim() === '') return;
    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = newNote;
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }
    setNewNote('');
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    setNewNote(notes[index]);
    setEditingIndex(index);
  };

  return (
    <div className={styles.container}> {/* Usar el estilo desde diario.module.css */}
      <h1>Baúl de Gratitud</h1>
      <div>
        <input
          type="text"
          placeholder="Escribe una nota de gratitud..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>{editingIndex !== null ? 'Editar' : 'Guardar'}</button>
      </div>
      <div>
        {notes.map((note, index) => (
          <div className={styles.boxContainer} key={index}> {/* Usar el estilo desde diario.module.css */}
            <div className={styles.formContainer}> {/* Usar el estilo desde diario.module.css */}
              <p>{note}</p>
              <button onClick={() => deleteNote(index)}>Eliminar</button>
              <button onClick={() => editNote(index)}>Editar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GratitudeBox;
