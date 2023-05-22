import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'Components/Router';
import GlobalStyles from 'Components/Styles/GlobalStyles';
import Theme from 'Components/Styles/Theme';
import 'Components/Styles/font.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    );
  }
}
export default App;
