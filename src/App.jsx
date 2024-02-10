import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

//data
import disaster from "./data/disasters.json";

// page imports
import GetHelpPage from './pages/GetHelpPage/GetHelpPage';
import LandingPage from './pages/LandingPage/LandingPage';
import DonatePage from './pages/DonatePage/DonatePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// components 
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PrototypeDescription from './components/PrototypeDescription/PrototypeDescription';
import disasterData from './data/disasters.json';

function App() {

  let [disasterList, setDisasterList] = useState(disasterData);
  let [selectedDisaster, setSelectedDisaster] = useState();


  const addExperienceComment = (comment, disasterId) => {
    const disasterCopy = disasterList;
    disasterCopy.find(disaster => disaster.id === disasterId).experiences.push(comment)
    disasterCopy.find(disaster => disaster.id === disasterId).experiences.sort((a, b) => b.timestamp - a.timestamp);
    setDisasterList(disasterCopy);

  }



  return (
    <>
      < PrototypeDescription />
      <main className='app'>
        <BrowserRouter>
          <NavBar />

          <div className='app__page'>
            <Routes>
              <Route
                path="/"
                element={<LandingPage disasterData={disasterList} />}
              />

              <Route
                path="/gethelp/:id"
                element=
                {<GetHelpPage disasterData={disasterList} addExperienceComment={addExperienceComment} />}
              />

              <Route
                path='donate/:type'
                element={<DonatePage disasterData={disasterList} />}
              />

              <Route
                path="/*"
                element={<NotFoundPage
                />}
              />

            </Routes>

          </div>
          <Footer />
        </BrowserRouter>
      </main>

    </>
  );
}

export default App;
