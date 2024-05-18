import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = (onJourneyChange) => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <div>{`Nalezeno spojení s ${journey.journeyId}`}</div> : null}
    </main>
  );
};
