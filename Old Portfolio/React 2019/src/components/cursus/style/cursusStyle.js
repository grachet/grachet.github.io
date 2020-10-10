import createStyles from '../../../constants/styleGlobal'

export default theme => createStyles({
  root: {
    paddingTop: 70,
    backgroundColor: "#1b1B1D"
  },
  iconYear: {
    fontSize: 10,
  },
  stepper: {
    backgroundColor: "transparent"
  },
  step: {
    cursor: "pointer",
    "&:hover": {
      // backgroundColor: "#d3d3d3",
    }
  },
  slider: {
    marginTop: 10,
    maxWidth: 200
  },
  verticalText: {
    transform: "rotate(90deg)",
    transformOrigin: "left top 0",
  }
});