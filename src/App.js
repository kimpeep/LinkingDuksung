import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './component/Navbar';
import UnlockPage from './pages/UnlockPage';
import CollaborationPage from './pages/CollaborationPage';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path ="/" element={<Navbar />}>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/dataunlock" element={<UnlockPage />}/>
          <Route path="/dataunlock/detail" element={<DetailPage />}/>
          <Route path="/collaboration" element={<CollaborationPage />}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
