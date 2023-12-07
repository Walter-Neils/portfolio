import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import HomePage from './pages/HomePage';


const theme = createTheme({
  // Dark mode
  palette: {
    mode: 'dark',
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
