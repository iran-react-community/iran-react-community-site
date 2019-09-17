import React from 'react';
import theme from "../theme"
import { ThemeProvider } from '@material-ui/styles';
import App from "./App"

export default function Index() {

  return (<ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>);
}
