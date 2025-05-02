import React from "react";
import GlobalStyle from "./Styles/GlobalStyles";
import Home from "./pages/Home";
import Header from "./components/Header";
import ExploreCategories from "./pages/ExploreCategories";
import YourNext from "./pages/YourNext";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="min-h-screen flex flex-col">
      <GlobalStyle/>
    <Header />
    <main className="flex-grow">
      <Home />
      <ExploreCategories />
      <YourNext />
    </main>
    <Footer />
    {/* <Toaster position="top-right" /> */} 
  </div>
  );
}

export default App;

