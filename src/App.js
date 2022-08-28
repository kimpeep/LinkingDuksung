import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './component/Navbar';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path ="/" element={<Navbar />}>
          <Route path="/" element={<LandingPage />}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
