import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import PredictionDetails from "./components/PredictionDetail/PredictionDetails";
import "./App.css";
import { GProvider } from "./components/Contexts/GContext";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <GProvider>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/prediction-details"
            element={<PredictionDetails />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </GProvider>
    </div>
  );
}

export default App;
