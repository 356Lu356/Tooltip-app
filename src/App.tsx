import "./App.css";

import { TooltipComponent } from "./components/Tooltip";

function App() {
  return (
    <div className="tooltip_container">
      <div>
        <h1>Tooltip App</h1>
        <p>Este es un ejemplo de Tooltip</p>
        <TooltipComponent label=" Este es un ejemplo de Tooltip">
          <button>Ejemplo de Tooltip</button>
        </TooltipComponent>
      </div>
    </div>
  );
}

export default App;
