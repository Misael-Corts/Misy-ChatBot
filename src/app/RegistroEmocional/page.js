// page.js
'use client' //para que no sea procesada en el servidor
import { useState } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '@/styles/registroEmocional.module.css';
import Layout from "@/components/Layout";

export default function RegistroEmocionalPageClient() {
  
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEmotion, setSelectedEmotion] = useState('');
    const [emojiDates, setEmojiDates] = useState({});

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleEmotionSelect = (emotion) => {
        setSelectedEmotion(emotion);
        const updatedEmojiDates = { ...emojiDates };
        updatedEmojiDates[selectedDate.toISOString()] = emotion;
        setEmojiDates(updatedEmojiDates);
    };

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

    const calendarStyles = {
        background: 'linear-gradient(180deg, #6E9CF5 0%, rgba(110, 156, 245, 0.00) 100%)',
        borderWidth: '1px',
        borderColor: '#E8EDF5',
        margin: '0 auto', // Centrar el calendario horizontalmente
        width: '200%', // Ajustar el ancho al 100% del contenedor
        height: '96px', // Ajustar la altura al mismo tamaño que el título
    };

    return (
        <Layout>
        <div className={styles.mainContainer}>
            <div className={`${styles.calendarContainer} ${styles.transparentCalendar}`}>
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    tileContent={customTileContent}
                    className={styles.customCalendar}
                    calendarType="US"
                    style={calendarStyles} // Aplicar estilos personalizados al calendario
                />
            </div>
            <div className={styles.emotionSelector}>
                <div className={styles.centerEmojis}>
                    <button onClick={() => handleEmotionSelect('😃')} className={styles.emotionButton}>
                        😃
                    </button>
                    <button onClick={() => handleEmotionSelect('😔')} className={styles.emotionButton}>
                        😔
                    </button>
                    <button onClick={() => handleEmotionSelect('😢')} className={styles.emotionButton}>
                        😢
                    </button>
                    {/* Agrega más botones con emojis de emociones según sea necesario */}
                </div>
            </div>
        </div>
        </Layout>
        

    );
}
