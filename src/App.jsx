import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import PredictionDetails from "./components/PredictionDetail/PredictionDetails";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/prediction-details"
          element={<PredictionDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
