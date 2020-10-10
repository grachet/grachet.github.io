import createStyles from '../../../constants/styleGlobal'

export default theme => createStyles({
  root: {
    height: "calc(100vh - 64px)",
    width: "100%"
  },

  contactIcon: {
    position : "absolute",
   top : 20,
    right : 50,
  },

  waveStatic: {
    position: "absolute",
    bottom: 64,
    right: 0,
    height:"80%",
    width: "auto",
  },
  title: {
    position: "absolute",
    top: "15%",
    left: "10%",
    maxWidth: "50%"
  },
  titleXs: {
    position: "absolute",
    top: "15%",
    textAlign: "center",
    paddingRight : 20,
    paddingLeft : 20,
  },
  canvas: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  bigWave: {
    height: "58%"
  },
  littleWave: {
    height: "52%"
  }

});