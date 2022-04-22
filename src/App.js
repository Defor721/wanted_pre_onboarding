import "./App.css";
import Slider from "./components/Slider.js";
import Input from "./components/Input.js";
import Dropdown from "./components/Dropdown.js";
function App() {
  return (
    <div className="App">
      <Slider />
      <hr />
      <Input />
      <hr />
      <Dropdown />
      <hr />
    </div>
  );
}

export default App;
