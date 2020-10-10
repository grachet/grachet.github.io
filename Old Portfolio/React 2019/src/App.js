import React, {Component} from 'react';
import './App.css';
import MainContainer from './components/navigation/MainContainer'
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import ReactGA from 'react-ga';

const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#1B1B1D',//'#202124',
    },
    secondary: {
      main: "#F1F1F1",
    },
  },
});

class App extends Component {

  componentDidMount() {
    const ele = document.getElementById('loaderContainer')
    if(ele){
      // fade out
      ele.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }
    ReactGA.initialize('UA-135994859-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
        return (
            <React.Fragment>
              <MuiThemeProvider theme={lightTheme}>
                <CssBaseline/>
                <MainContainer/>
              </MuiThemeProvider>
            </React.Fragment>

        );
    }
}

export default App;
