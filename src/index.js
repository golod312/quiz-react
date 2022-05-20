import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { QuizProvider } from "./contexts/quiz"
import { HashRouter } from 'react-router-dom';
import App from './App';




ReactDOM.render(

  <QuizProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </QuizProvider>,




  document.getElementById('root')
);

