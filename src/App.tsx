import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NormalSM from "./pages/NormalSM";
import RecoilSM from "./pages/RecoilSM";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<NormalSM />} />
          <Route path="/recoil" element={<RecoilSM />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
