import { useState } from "react";
import StiliziranaKartica from "./components/StiliziranaKartica";
import Header from "./components/Header";
import karticaData from "./data/karticaData";
import ListaKartica from "./components/ListaKartica";

const App = () => {
  const [kartica, setKartica] = useState(karticaData);
  return (
    <div>
      <Header />
      <ListaKartica kartica={kartica} />
    </div>
  );
};

export default App;
