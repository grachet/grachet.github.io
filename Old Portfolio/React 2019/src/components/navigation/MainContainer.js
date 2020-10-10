import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import AppBar from './AppBar';
import ProjectContainer from '../projects/ProjectContainer'
import styles from './style/navigationStyle'
import HomeIntro from '../homeIntro/HomeIntro'
import Cursus from '../cursus/Cursus'
import Contact from '../contact/Contact'
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import getTextConst from "../../constants/getTextConst"
import {animateScroll as scroll, Element, Link, scroller} from 'react-scroll'
import BottomScrollListener from 'react-bottom-scroll-listener'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F1F1F1',
    },
    secondary: {
      main: "#F1F1F1",
    },
  },
})

class MainContainer extends React.Component {

  state = {
    tabIndex: 0,
    isEnglish: true,
    onScrollTab: false
  }

  changeTab = (value) => {
    this.setState({tabIndex: value})
  }

  preventScroll = () => {
    this.setState({onScrollTab: true});
    setTimeout(() => {
      this.setState({onScrollTab: false});
    }, 1500);
  }

  scrollToTabIndex = (index) => {
    this.preventScroll();
    if (index !== 2) {
      scroller.scrollTo("section" + index, {
        duration: 1500,
        smooth: "easeInOutQuint"
      })
    } else {
      scroll.scrollToBottom({
        duration: 1500,
      })
    }
  }

  render() {

    const {classes} = this.props;

    let textConst = getTextConst(this.state.isEnglish);

    return (
      <div className={classes.root}>
        <Link
          spy={!this.state.onScrollTab}
          onSetActive={() => this.changeTab(0)}
          to={"section0"}
        >
        </Link>
        <Link
          spy={!this.state.onScrollTab}
          onSetActive={() => this.changeTab(1)}
          to={"section1"}
        >
        </Link>
        <main className={classes.content}>
          <HomeIntro textConst={textConst}/>
          <AppBar textConst={textConst} tabIndex={this.state.tabIndex} isEnglish={this.state.isEnglish}
                  changeLanguage={() => this.setState(state => ({isEnglish: !state.isEnglish}))}
                  onChangeTab={(event, value) => {
                    this.setState({tabIndex: value});
                    this.scrollToTabIndex(value)
                  }}/>
          <MuiThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Element name="section0">
              <Cursus textConst={textConst} changeTab={this.changeTab}/>
            </Element>
            <Element name="section1">
              <ProjectContainer textConst={textConst} changeTab={this.changeTab}/>
            </Element>
          </MuiThemeProvider>
          <Element name="section2">
            <Contact textConst={textConst} changeTab={this.changeTab} scrollToTop={() =>     {
              this.setState({tabIndex:0})
              this.preventScroll();
              scroll.scrollToTop({
                duration: 1500,
              });
            }}/>
          </Element>
        </main>
        <BottomScrollListener offset={20} onBottom={() => {
          this.changeTab(2)
        }}/>
      </div>
    );
  }
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainContainer);