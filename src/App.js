import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import commonStyle from './styles/themes/common';
import themes from './styles/themes';

function App() {

  const [theme, setTheme] = useState('dark');

  const curentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme])

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={curentTheme}>
      <GlobalStyle />
      <Layout 
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}  
      />
    </ThemeProvider>
  );
};

export default App;
