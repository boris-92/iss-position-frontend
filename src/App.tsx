import "./App.css";

import Map from "./components/Map/Map";
import InfoBlock from "./components/InfoBlock/InfoBlock";

import { ISSProvider } from "./context/iss/issProvider";

function App() {
  return (
    <>
      <ISSProvider>
        <Map />
        <InfoBlock />
      </ISSProvider>
    </>
  );
}

export default App;
