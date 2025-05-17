import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromCity, toCity, date);
    //onJourneyChange(event.target.value)
  };
  

  return(
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form onSubmit={handleSubmit} className="journey-picker__form">
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select value={fromCity} onChange={(event) => setFromCity(event.target.value)}>
            <option value="">Vyberte</option>
            <option value='Město 01'>Město 01</option>
            <option value='Město 02'>Město 02</option>
            <option value='Město 03'>Město 03</option>
            <option value='Město 04'>Město 04</option>
            <option value='Město 05'>Město 05</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select value={toCity} onChange={(event) => setToCity(event.target.value)}>
            <option value="">Vyberte</option>
            <option value='Město 01'>Město 01</option>
            <option value='Město 02'>Město 02</option>
            <option value='Město 03'>Město 03</option>
            <option value='Město 04'>Město 04</option>
            <option value='Město 05'>Město 05</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select value={date} onChange={(event) => setDate(event.target.value)}>
            <option value="">Vyberte</option>
            <option value='Datum 01'>Datum 01</option>
            <option value='Datum 02'>Datum 02</option>
            <option value='Datum 03'>Datum 03</option>
            <option value='Datum 04'>Datum 04</option>
            <option value='Datum 05'>Datum 05</option>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src="/map.svg" />
    </div>
  </div>
)};


/* 

V komponentě JourneyPicker si připravte funkci handleSubmit(event), která se bude volat při odeslání formuláře. Ošetřete, aby prohlížeč sám neodesílal formulář a zatím si ve funkci jen vypište do konzole text 'Odesílám formulář s cestou'.

Napojte funkci handleSubmit na událost submit ve formuláři. Ověřte v prohlížeči, že po kliknutí na Vyhledat spoj se v konzoli objeví výše uvedený text.

Pomocí useState si v komponentě připravte tři stavy: fromCity, toCity a date. Výchozí hodnotou bude ve všech třech případech prázdný řetězec '';

Napojte každý ze stavů na správný <select> tak, aby select zobrazoval vybraný stav a změna v selectu se promítla do stavu. Vytvoříte tedy dvoucestný databinding, kdy se např. stav fromCity bude promítat do value příslušného selectu, a při události onChange na selectu se nová hodnota zapíše do stavu fromCity. Obdobně i pro další dva selecty a stavy toCity a date.
Upravte funkci handleSubmit tak, aby do konzole vypsala všechny tři stavy. Vyzkoušejte, že výběrem stavu v selectu se změní stav – po kliknutí na tlačítko se do konzole vypíše změněný stav. Tím, že si dočasně změníte výchozí hodnotu v useState('') na některou z hodnot (atribut value) v <option> můžete ověřit, že funguje správně nastavení výchozího stavu selectu.
Commitněte změny.






*/ 
