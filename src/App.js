import React from 'react';
import Navbar from './components/Navbar/Navbar';
import QuestionPanel from './components/QuestionPanel/QuestionPanel';
import QuestionPalette from './components/QuestionPalette/QuestionPalette';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <QuestionPanel />
        {/* <QuestionPalette /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
