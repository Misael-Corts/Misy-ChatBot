'use client' //para que no sea procesada en el servidor
import { useState, useEffect } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '@/styles/registroEmocional.module.css';
import Layout from "@/components/Layout";

export default function RegistroEmocionalPageClient() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEmotion, setSelectedEmotion] = useState('');
    const [emojiDates, setEmojiDates] = useState({});

        // Cargar notas almacenadas en localStorage al cargar la página
    useEffect(() => {
        if (typeof window !== 'undefined') {
        const savedNotes = JSON.parse(localStorage.getItem('emojiDates') || '[]');
        setEmojiDates(savedNotes);
        }
    }, []);

    // Guardar notas en localStorage cuando cambian
    useEffect(() => {
        if (typeof window !== 'undefined') {
        localStorage.setItem('emojiDates', JSON.stringify(emojiDates));
        }
    }, [emojiDates]);


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleEmotionSelect = (emotion) => {
        setSelectedEmotion(emotion);
        const updatedEmojiDates = { ...emojiDates };
        updatedEmojiDates[selectedDate.toISOString()] = emotion;
        setEmojiDates(updatedEmojiDates);
    };

    const deleteEmoji = () => {
        // Clona el objeto emojiDates para evitar modificarlo directamente.
        const emojiDatesClone = { ...emojiDates };

        const DateEmoji = new Date(selectedDate);

        // Convierte DateEmoji a una cadena para que coincida con el formato de las claves.
        const DateEmojiString = DateEmoji.toISOString();

        // Verifica si la clave existe en el objeto clonado.
        if (emojiDatesClone.hasOwnProperty(DateEmojiString)) {
            delete emojiDatesClone[DateEmojiString];
            // Actualiza el estado con el objeto clonado modificado.
            setEmojiDates(emojiDatesClone);
        }
    }

    const customTileContent = ({ date, view }) => {
        if (view === 'month') {
            const emoji = emojiDates[date.toISOString()];
            if (emoji) {
                return (
                    <div className={styles.emojiTile}>
                        {emoji}
                    </div>
                );
            }
        }

        return null;
    };

    return (
        <Layout>
            <div className={styles.mainContainer}>
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    tileContent={customTileContent}
                    className={styles.customCalendar}
                    maxDate={new Date()}
                    locale="es"
                />
                <div className={styles.emotionSelector}>
                    <button onClick={() => handleEmotionSelect('😃')} className={styles.emotionButton}>
                        😃
                    </button>
                    <button onClick={() => handleEmotionSelect('😔')} className={styles.emotionButton}>
                        😔
                    </button>
                    <button onClick={() => handleEmotionSelect('😢')} className={styles.emotionButton}>
                        😢
                    </button>
                    <button onClick={() => deleteEmoji()} className={styles.btnEliminar}>Borrar</button>

                    {/* Agrega más botones con emojis de emociones según sea necesario */}
                </div>
            </div>
        </Layout>


    );
}
