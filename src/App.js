// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoxContainer from '../src/container/BoxContainer';
import MainContainer from "./container/MainContainer"; // 새로 이동할 페이지의 컴포넌트

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/rsp" element={<BoxContainer />} />
        </Routes>
      </Router>
  );
}

export default App;
