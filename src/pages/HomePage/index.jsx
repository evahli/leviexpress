import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/journeydetail';
import { SelectedSeat } from '../../components/SelectedSeat/SelectedSeat';
import { useState } from 'react';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  }
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      <p>{journey === null ?'' : <JourneyDetail journey={journey}/>}</p>
      <p>{journey === null ?'' : <SelectedSeat number={journey.autoSeat}/>}</p>
      
    </main>
  );
};
