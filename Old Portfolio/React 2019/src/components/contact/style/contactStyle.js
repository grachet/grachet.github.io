import createStyles from '../../../constants/styleGlobal'

export default theme => createStyles({
  waveCanvas: {
    transform: "rotate(180deg)",
    width: "100%",
    height: "200px"
  },
  spaceDiv: {
    height: 70,
    backgroundColor: "#1b1B1d",
  },
  arrowBottom: {
    overflow:"hidden",
    marginRight : "auto",
    marginLeft : "auto",
    textAlign: "center",
    fontSize:30,
    cursor: "pointer",

    // position: "relative",
    // bottom: 0,
    // left: "calc(50% - 30px)",

    backgroundColor: "#1b1B1d",
    width: 60,
    height: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    "&:hover": {
      fontSize:31,
      backgroundColor: "#252528",
      width: 62,
      transition: theme.transitions.create(['height', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest,
      }),
    }
  }


});