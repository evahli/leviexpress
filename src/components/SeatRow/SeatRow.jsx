import './styles.css';
import { Seat } from '../Seat/Seat';

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-row">
      {row.map((item) => (
        <Seat
          key={item.number}
          number={item.number}
          isOccupied={item.isOccupied}
          isSelected={item.number === rowSelectedSeat}
          onSelect={onSeatSelected}
        />
      ))}
    </div>
  );
};
