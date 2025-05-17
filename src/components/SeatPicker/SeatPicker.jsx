import './styles.css'
import { Seat } from '../Seat/Seat';

export const SeatPicker = () => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats"></div>
      <Seat number={13} />
      <Seat number={23} />
      <Seat number={32} />

    </div>
  );
}
