import "./App.css";
import { useState } from "react";
function App() {
  const [greetingInput, setGreetingInput] = useState("");
  const [greetingText, setGreetingText] = useState("Greeting Message");
  const updateGreetingInput = (event) => {
    setGreetingInput(event.target.value);
  };
  const updateGreetingText = () => {
    setGreetingText(greetingInput);
  };
  return (
    <div className="App">
      {" "}
      <div className="greeting-container">{greetingText}</div>{" "}
      <div className="input-container">
        {" "}
        <label htmlFor="greeting-message">New Greeting Message</label>{" "}
        <input
          id="greeting-message"
          type="text"
          value={greetingInput}
          onChange={updateGreetingInput}
        />{" "}
      </div>{" "}
      <div className="buttons">
        {" "}
        <button onClick={updateGreetingText}>Update text</button>{" "}
      </div>{" "}
    </div>
  );
}
export default App;
