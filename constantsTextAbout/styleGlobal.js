const margin = {
  mrs: {
    marginRight: 5
  },
  mts: {
    marginTop: 5
  },
  mls: {
    marginLeft: 5
  },
  mbs: {
    marginBottom: 5
  },
  mtsm: {
    marginTop: 10
  },
  mrmd: {
    marginRight: 15
  },
  mtmd: {
    marginTop: 15
  },
  mlmd: {
    marginLeft: 15
  },
  mbmd: {
    marginBottom: 15
  },
  mrl: {
    marginRight: 30
  },
  mtxl: {
    marginTop: 70
  },
  ps: {
    padding: 5,
  },
  ms: {
    margin: 5,
  },
  mtn: {
    marginTop: -50
  },
  mtl: {
    marginTop: 30
  },
  mll: {
    marginLeft: 30
  },
  mbl: {
    marginBottom: 30
  },
  mbxl: {
    marginBottom: 45
  },
  mxl: {
    marginLeft: 30,
    marginRight: 30
  },
  mxs: {
    marginLeft: 5,
    marginRight: 5
  },
  mys: {
    marginTop: 5,
    marginBottom: 5
  },
  mymd: {
    marginTop: 15,
    marginBottom: 15
  },
  myl: {
    marginTop: 30,
    marginBottom: 30
  },
  pl: {
    padding: 30,
  },
  pxmd: {
    paddingRight: 15,
    paddingLeft: 15
  }
}

export const baseStyles = {
  ...margin,
  flex: {
    display: "flex"
  },
  flexGrow: {
    flexGrow: 1,
  },
  colorBeige: {
    color: "#F1F1F1"
  },
  w100: {
    width: "100%"
  },
  h100 : {
    height: "100%"
  },
  container: {
    justifyContent: 'center',
    paddingTop: 94,
    minHeight: "100vh",
    maxWidth: 1000,
    flexGrow: 1,
    padding: 20,
    margin: "auto"
  },
  warningText: {
    color: "#d93a3d"
  },
  warningButton: {
    backgroundColor: "#8e2829",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#a32d2f",
    }
  },
  fab: {
    position: 'fixed',
    bottom: 60,
    right: 60,
    zIndex: 1000
  },
  title: {
    fontSize: 20,
    color: "#000"
  },
  smallTitleRight: {
    float: "right",
    fontSize: "80%",
  },
  floatRight: {
    float: "right",
  },
  iconSmall: {
    fontSize: 20,
  },
  bgDanger: {
    backgroundColor: "#cc635e"
  },
  textCenter: {
    textAlign: "center"
  },
  borderContainer: {
    backgroundColor: "rgba(0,0,0,0.03)",
    marginTop: 20,
    marginBottom: 45,
    padding: "10px 20px 20px 20px",
    borderRadius: 10
  }
};

export default function createStyles(overrides = {}) {
  return {...baseStyles, ...overrides}
}
