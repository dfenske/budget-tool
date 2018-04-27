import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import MainPage from './components/MainPage';

ReactDOM.render(
  <MainPage />,
  document.getElementById('root')
);

module.hot.accept();