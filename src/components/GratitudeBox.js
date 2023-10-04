'use client' // Para que no sea procesada en el servidor
import React, { useState, useEffect } from 'react'; 
import styles from '@/styles/diario.module.css';

const GratitudeBox = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Cargar notas almacenadas en localStorage al cargar la página
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedNotes = JSON.parse(localStorage.getItem('gratitudeNotes') || '[]');
      setNotes(savedNotes);
    }
  }, []);

  // Guardar notas en localStorage cuando cambian
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gratitudeNotes', JSON.stringify(notes));
    }
  }, [notes]);

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
    <div className={styles.container}>
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
          <div className={styles.boxContainer} key={index}>
            <div className={styles.formContainer}>
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
