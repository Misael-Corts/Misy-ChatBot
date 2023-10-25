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
                    {/* Agrega más botones con emojis de emociones según sea necesario */}
            </div>
        </div>
        </Layout>
        

    );
}
