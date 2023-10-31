'use client' // Para que no sea procesada en el servidor
import React, { useState, useEffect } from 'react'; 
import styles from '@/styles/diario.module.css';
import Image from "next/image";
import logoBaul from "../../public/img/gratitudeBox.png";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";


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

      <div className={styles.containerTitle}>
      <h1 className={styles.title}>Baúl de Gratitud</h1>
      <Image width={150}
          src={logoBaul}
        />
      </div>



      <div className={styles.cardContainer}>
        {notes.map((note, index) => (
          <div className={styles.notitaContainer}>
          <div className={styles.boxContainer} key={index}>      
              <p className={styles.textStyle}>{note}</p>     
          <div className={styles.btnContainer}>
              <button onClick={() => deleteNote(index)}><FaRegTrashAlt  className={styles.icons} /></button>
              <button onClick={() => editNote(index)}><FaEdit className={styles.icons}/></button>
          </div>
          </div>
          </div>
        ))}
      </div>
      
       
   <div className={styles.notaContainer}>
        <input
          type="text"
          placeholder="Escribe una nota de gratitud..."
          value={newNote}
          className={styles.input}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className={styles.sendButton} onClick={addNote}>{editingIndex !== null ? 'Editar' : 'Guardar'}</button>
      </div>


    </div>
  );
};

export default GratitudeBox;
