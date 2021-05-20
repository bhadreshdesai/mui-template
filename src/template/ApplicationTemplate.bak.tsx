import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 160;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {},
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    },
    // When the drawer is closed shift it left by drawerWidth
    content: {
      flexGrow: 1,
      marginLeft: -drawerWidth
    },
    // When the drawer is open set the marginLeft to 0 so it starts after the drawer
    contentShift: {
      marginLeft: 0
    },
    // This is used by both the drawer and paper within the drawer
    drawer: {
      width: drawerWidth
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content/sidebar items to be below app bar
      ...theme.mixins.toolbar
    }
  })
);

const ApplicationTemplate: React.FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography>BD React Material Template</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{
          paper: classes.drawer
        }}
        className={classes.drawer}
        open={open}
        variant="persistent"
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
        id="mainContent"
      >
        <div className={classes.toolbar}></div>
        {children}
      </main>
    </div>
  );
};

export default ApplicationTemplate;
