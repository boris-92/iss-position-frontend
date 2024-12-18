import client from "./apiClient";

type CurrentPositionResponse = {
  timestamp: number;
  message: string;
  iss_position: {
    longitude: string;
    latitude: string;
  };
};

export default {
  getCurrentPosition() {
    return client.get<CurrentPositionResponse>("iss-now.json");
  },
};
