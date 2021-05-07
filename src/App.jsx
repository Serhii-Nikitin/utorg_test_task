import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './App.scss';

export const App = () => (
  <div className="page-content">
    <Header />
    <Main  />
    <Footer />
  </div>
);
