import { useCallback, useEffect, useState } from "react";

import api from "../api";

export type Position = [number, number];

const useISSPosition = (
  updateInterval: number = 5000
): {
  position: Position | null;
  lastUpdateTime: Date | null;
  refresh: () => void;
} => {
  const [position, setPosition] = useState<Position | null>(null);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date | null>(null);

  const fetchISSLocation = useCallback(async () => {
    try {
      const response = await api.iss.getCurrentPosition();

      const { latitude, longitude } = response.data.iss_position;

      setPosition([parseFloat(latitude), parseFloat(longitude)]);
      setLastUpdateTime(new Date());
    } catch (error) {
      console.error("Fetch coordinates error: ", error);
    }
  }, []);

  useEffect(() => {
    fetchISSLocation();

    const interval = setInterval(fetchISSLocation, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval, fetchISSLocation]);

  return { position, lastUpdateTime, refresh: fetchISSLocation };
};

export default useISSPosition;
