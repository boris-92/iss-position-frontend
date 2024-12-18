import { FC } from "react";
import "./InfoBlock.css";

import { useISSContext } from "../../context/iss/useISSContext";

const DEFAULT_VALUES = {
  height: 413.28,
  velocity: 27597,
  period: 92.88,
};

const InfoBlock: FC = () => {
  const { position, refresh } = useISSContext();

  const handleRefresh = () => {
    refresh();
  };

  return (
    <div className="info-block-container">
      <p className="center">ISS</p>
      {position ? (
        <>
          <p>Latitude: {position[0].toFixed(6)}</p>
          <p>Longitude: {position[1].toFixed(6)}</p>
          <p>{`Height: ${DEFAULT_VALUES.height} km`}</p>
          <p>{`Velocity: ${DEFAULT_VALUES.velocity} km/h`}</p>
          <p>{`Period: ${DEFAULT_VALUES.period} min`}</p>
          <p className="center">ISS is tracked</p>
          <button onClick={handleRefresh}>Refresh</button>
        </>
      ) : (
        <p>Loading coordinates...</p>
      )}
    </div>
  );
};

export default InfoBlock;
