import './styles.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export const ReservationPage = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);
  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`,
      );
      const responseData = await response.json();
      setReservation(responseData.results);
    };
    fetchReservation();
  }, []);

  return (
    <div className="reservation container">
      {reservation === null ? (
        ''
      ) : (
        <>
          <h2>Vaše e-jízdenka č. {reservation.reservationId}</h2>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
              <p>{reservation.date}</p>
              <p>{reservation.fromCity.name}, {reservation.fromCity.time}</p>
              <p>{reservation.toCity.name}, {reservation.toCity.time}</p>
              <p>{reservation.seatNumber}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
