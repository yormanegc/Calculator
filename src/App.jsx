import { useRef, useState } from "react";
import Buttons from "./Components/Buttons";
import Window from "./Components/Window";

const App = () => {
  const [value, setValue] = useState();
  const inputValueRef = useRef();

  return (
    <div className="app">
      <div className="calculator">
        <Window
          inputValueRef={inputValueRef}
          setValue={setValue}
          value={value}
        />
        <Buttons
          inputValueRef={inputValueRef}
          setValue={setValue}
          value={value}
        />
      </div>
    </div>
  );
};

export default App;
