import React from "react";
import ReactDOM from "react-dom";
import styles from "@/styles/modal.module.css";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Modal ({ejerciciosModal}) {
  
  return (
   <>
      {ejerciciosModal.map((element, index) => (         
        <div  key={index}> 
        <b>{element.title}</b>
        <p>{element.text}</p>
        {element.image ? <div>{element.image}</div> : null}
        {/* //por las dudas podemos agregar ternario si queremos poner una imgaen o algo xd */}
        <br />
        </div>
      ))}
      </>
    )
}