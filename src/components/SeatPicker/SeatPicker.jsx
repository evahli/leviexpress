import './styles.css';
import { Seat } from '../Seat/Seat';
import { SeatRow } from '../SeatRow/SeatRow';

export const SeatPicker = ({ seats, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row) => (
          <SeatRow
            row={row}
            rowSelectedSeat={rowSelectedSeat}
            onSeatSelected={onSeatSelected}
          />
        ))}
      </div>
    </div>
  );
};
