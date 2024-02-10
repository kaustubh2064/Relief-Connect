import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

// Data
import disasterData from "./data/disasters.json";

// Page imports
import GetHelpPage from './pages/GetHelpPage/GetHelpPage';
import LandingPage from './pages/LandingPage/LandingPage';
import DonatePage from './pages/DonatePage/DonatePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginForm from './pages/LoginPage/login';

// Components 
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const [disasterList, setDisasterList] = useState(disasterData);
  const [selectedDisaster, setSelectedDisaster] = useState();

  const addExperienceComment = (comment, disasterId) => {
    const disasterCopy = [...disasterList]; // Create a shallow copy
    const selectedDisasterIndex = disasterCopy.findIndex(disaster => disaster.id === disasterId);
    if (selectedDisasterIndex !== -1) {
      disasterCopy[selectedDisasterIndex].experiences.push(comment);
      disasterCopy[selectedDisasterIndex].experiences.sort((a, b) => b.timestamp - a.timestamp);
      setDisasterList(disasterCopy);
    }
  };

  return (
    <main className='app'>
      <BrowserRouter>
        <NavBar />  
        <div className='app__page'>
          <Routes>
            {/* Login route */}

            {/* Other routes */}
            <Route path="/" element={<LandingPage disasterData={disasterList} />} />
            <Route path="/gethelp/:id" element={<GetHelpPage disasterData={disasterList} addExperienceComment={addExperienceComment} />} />
            <Route path="/donate/:type" element={<DonatePage disasterData={disasterList} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
