import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { QuizProvider } from "./contexts/quiz"
import { BrowserRouter } from 'react-router-dom';
import App from './App';




ReactDOM.render(

  <QuizProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QuizProvider>,




  document.getElementById('root')
);

