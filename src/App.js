import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Quiz from "./components/Quiz";

const App = () => {

          return <div>


                    <Routes>
                              <Route path="/" element={<MainPage />}></Route>
                              <Route path="/quiz" element={<Quiz />}> </Route>
                    </Routes>
          </div>
}

export default App