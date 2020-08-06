import React from 'react';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Searchbar from "./components/Searchbar";
import './App.css';

function App() {
  return (
    <div className="app">
      <Wrapper>
        <Header />
        <Searchbar />
      </Wrapper>
    </div>
  );
}

export default App;
