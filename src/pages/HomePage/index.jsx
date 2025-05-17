import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/journeydetail';
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
    </main>
  );
};
