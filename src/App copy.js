import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppCopy from "./App";
import Introduce02 from "./components/Introduce02";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Test1 from "./test/Test1";
import Test2 from "./test/Test2";
import Test3 from "./test/Test3";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppCopy />
        <Routes>
          <Route path="/introduce" element={<Introduce02 />}></Route>
          <Route path="/test/*" element={<Test3 />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
