import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyles";
import Home from "./pages/Home";
import ExploreCategories from "./pages/ExploreCategories";
import YourNext from "./pages/YourNext";
import OnBoard from "./pages/OnBoard"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import OnBoardOne from "./pages/OnBoardOne";
import OnBoardTwo from "./pages/OnBoardTwo";
import OnBoardThree from "./pages/OneBoardThree";
import OnBoardFour from "./pages/OnBoardFour";
import OnBoardFive from "./pages/OnBoardFive";
import OnBoardSix from "./pages/OnBoardSix";
import CreateFit from "./pages/CreateFit";
import CreateFitOne from "./pages/CreateFitOne";
import CreateFitTwo from "./pages/CreateFitTwo";
import CreateFitThree from "./pages/CreateFitThree";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <GlobalStyle />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExploreCategories />} />
            <Route path="/next" element={<YourNext />} />
                             {/* onboard */}
            <Route path="/onboard" element={<OnBoard />} />
            <Route path="/onboardone" element={<OnBoardOne />} />
            <Route path="/onboardtwo" element={<OnBoardTwo />} />
            <Route path="/onboardthree" element={<OnBoardThree />} />
            <Route path="/onboardfour" element={<OnBoardFour />} />
            <Route path="/onboardfive" element={<OnBoardFive />} />
            <Route path="/onboardsix" element={<OnBoardSix />} />
                           {/* createoutfit */}
            <Route path="/createfit" element={<CreateFit />} />
            <Route path="/createfitone" element={<CreateFitOne />} />
            <Route path="/createfittwo" element={<CreateFitTwo />} />
            <Route path="/createfitthree" element={<CreateFitThree />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
