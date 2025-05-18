import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/journeydetail';
import { SelectedSeat } from '../../components/SelectedSeat/SelectedSeat';
import { SeatPicker } from '../../components/SeatPicker/SeatPicker';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { use } from 'react';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);
  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
    setUserSeat(journeyData.autoSeat)
  };

  const navigate = useNavigate();

  const handleBuy = async () => {
    const response = await fetch(
      'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: userSeat,
          journeyId: journey.journeyId,
        }),
      },
    );
    const responseData = await response.json();
    const reservationId = responseData.results.reservationId;
    navigate(`/reservation/${reservationId}`);
  };

  const finalSetUserSeat = (number) => {
    setUserSeat(number)
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <p>{journey === null ? '' : <JourneyDetail journey={journey} />}</p>
      <p>
        {journey === null ? (
          ''
        ) : (
          <SeatPicker
            seats={journey.seats}
            rowSelectedSeat={userSeat}
            onSeatSelected={finalSetUserSeat}
          />
        )}
      </p>
      <div className="controls container">
        {journey === null ? (
          ''
        ) : (
          <button onClick={handleBuy} className="btn btn--big" type="button">
            Rezervovat
          </button>
        )}
      </div>
    </main>
  );
};
