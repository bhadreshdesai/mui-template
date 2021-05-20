import * as React from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { useSideBarContext } from "../contexts/SideBarContext";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: theme.palette.primary.dark
  },
  icon: {
    padding: theme.spacing(1)
  },
  title: {
    margin: "auto"
  }
}));

export type HeaderProps = {
  appName: string;
};

const Header: React.FC<HeaderProps> = ({ appName }) => {
  const classes = useStyles();
  const { isSideBarOpen, toggleIsSideBarOpen } = useSideBarContext();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {/* Use color="inherit" so the icon button is displayed in white */}
        <IconButton
          color="inherit"
          className={classes.icon}
          onClick={() => toggleIsSideBarOpen(!isSideBarOpen)}
        >
          {isSideBarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
