import * as React from "react";
import clsx from "clsx";
import {
  Drawer,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { useSideBarContext } from "../contexts/SideBarContext";
import MenuItemsList from "./MenuItemsList";
const drawerWidth = 160;
const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    background: theme.palette.primary.light,
    position: "static"
  },
  closed: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7) + 1,
    overflowX: "hidden"
  },
  opened: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const SideBar: React.FC = () => {
  const classes = useStyles();
  const { isSideBarOpen, toggleIsSideBarOpen } = useSideBarContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Drawer
      variant={isLargeScreen ? "permanent" : "temporary"}
      open={!isLargeScreen && isSideBarOpen ? true : false}
      onClose={() => toggleIsSideBarOpen(!isSideBarOpen)}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.closed]: !isSideBarOpen,
          [classes.opened]: isSideBarOpen
        })
      }}
    >
      <MenuItemsList />
    </Drawer>
  );
};

export default SideBar;
