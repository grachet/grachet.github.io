import createStyles from '../../../constants/styleGlobal'
import {fade} from "@material-ui/core/styles/colorManipulator";

export default theme => createStyles({
  rootProject: {
    paddingTop: 140,
    backgroundColor: "#1B1B1D",
  },
  overlayCardImg: {
    cursor: "pointer",
    "&:hover": {
      background: "rgba(0,0,0,0.5)",
    },
    transition: theme.transitions.create(['background'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    position: "absolute",
    top: 0,
    width: "100%",
    height: "calc(100% - 4px)",
  },
  githubIcon: {

  },
  imgContainer: {
    "&:hover": {
      marginBottom: 20
    },
    transition: theme.transitions.create(['margin-bottom'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    position: "relative",
    display: "inline-block"
  },
  media: {
    objectFit: 'cover',
  },
  icon: {
    color: '#fff',
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  root: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});