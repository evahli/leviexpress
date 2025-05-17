import './styles.css';
import { BusStop } from '../BusStop/busstop';

export const JourneyDetail = ({ journey }) => {

  return (
    <div class="journey-detail container">
      <>
        <h2>Podrobnosti cesty</h2>
        <div class="stops">
          {journey.stops.map((stop) => (
            <BusStop
              key={stop.code}
              name={stop.name}
              station={stop.station}
              time={stop.time}
            />
          ))}
        </div>
      </>
    </div>
  );
};
