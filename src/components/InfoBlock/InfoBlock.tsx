import { FC } from "react";
import "./InfoBlock.css";

const DEFAULT_VALUES = {
  height: 413.28,
  velocity: 27597,
  period: 92.88,
};

const InfoBlock: FC = () => {
  return (
    <div className="info-block-container">
      <p>ISS</p>
      <p>Latitude:</p>
      <p>Longitude:</p>
      <p>{`Height: ${DEFAULT_VALUES.height} km`}</p>
      <p>{`Velocity: ${DEFAULT_VALUES.velocity} km/h`}</p>
      <p>{`Period: ${DEFAULT_VALUES.period} min`}</p>
      <p>ISS is tracked</p>
    </div>
  );
};

export default InfoBlock;
