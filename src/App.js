import React from 'react';
import Home from "./pages/Home";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";


function App() {
  return (
      <div>
        <Wrapper>
          <Header />
          <Home />
        </Wrapper>
      </div>
  );
}

export default App;
