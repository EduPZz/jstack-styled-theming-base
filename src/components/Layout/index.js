import React from 'react';
import { Link, BrowserRouter, useHistory } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

import { Nav } from './styles';

export default function Layout({ 
  onToggleTheme, selectedTheme,
}) {
  return (
    <BrowserRouter>
      <Header 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}      
      />

      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/posts/120398?asd=0'>Posts</Link>
      </Nav>

      <Routes />
      <Footer onToggleTheme={onToggleTheme}selectedTheme={selectedTheme}      
      />
    </BrowserRouter>
  );
}
