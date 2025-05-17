import './styles.css';
import { Seat } from '../Seat/Seat';
import { SeatRow } from '../SeatRow/SeatRow';

export const SeatPicker = ({ seats }) => {
  const testRow = [
    {
      number: 33,
      isOccupied: false,
    },
    {
      number: 29,
      isOccupied: true,
    },
    {
      number: 25,
      isOccupied: false,
    },
  ];
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row) => <SeatRow row={row} />)}
        
      </div>
    </div>
  );
};

/*
Uvnitř komponenty SeatPicker projděte pole seats pomocí funkce map, a pro každý řádek pole vytvořte jednu komponentu SeatRow.

I komponenty SeatRow potřebují prop key. Zde bohužel nemáme žádnou rozumnou datovou položku, kterou bychom jako klíč mohli použít. Vzpomeňme si však, že funkce vložená do funkce map může mít dva parametry, druhý parametr je pořadové číslo (takzvaný index) aktuálního prvku. V tomto případě jej výjimečně můžeme použít jako key pro SeatRow.

*/
