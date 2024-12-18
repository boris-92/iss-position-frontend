import { FC } from "react";
import "./InfoBlock.css";

import { useISS } from "../../context/iss/useISS";

const DEFAULT_VALUES = {
  height: 413.28,
  velocity: 27597,
  period: 92.88,
};

const InfoBlock: FC = () => {
  const { position } = useISS();

  return (
    <div className="info-block-container">
      <p>ISS</p>
      {position ? (
        <>
          <p>Latitude: {position[0].toFixed(6)}</p>
          <p>Longitude: {position[1].toFixed(6)}</p>
          <p>{`Height: ${DEFAULT_VALUES.height} km`}</p>
          <p>{`Velocity: ${DEFAULT_VALUES.velocity} km/h`}</p>
          <p>{`Period: ${DEFAULT_VALUES.period} min`}</p>
          <p>ISS is tracked</p>
        </>
      ) : (
        <p>Loading coordinates...</p>
      )}
    </div>
  );
};

export default InfoBlock;
