import * as React from "react";
import { CssBaseline, makeStyles, Toolbar } from "@material-ui/core";
import Footer from "./components/Footer";
import Header, { HeaderProps } from "./components/Header";
import SideBar from "./components/SideBar";
import { SideBarContextProvider } from "./contexts/SideBarContext";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  container: {
    display: "flex",
    flex: 1,
    border: "2px solid #0000ff"
  },
  main: {
    flex: 1
  }
}));

type ApplicationProps = HeaderProps; /*& {
  someOtherPropName: string;
};*/

const Application: React.FC<ApplicationProps> = ({ appName, children }) => {
  const classes = useStyles();
  return (
    <SideBarContextProvider>
      <CssBaseline />
      <div className={classes.root}>
        <Header appName={appName} />
        <Toolbar />
        <div className={classes.container}>
          <SideBar />
          <main className={classes.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </SideBarContextProvider>
  );
};

/*
const ApplicationTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
*/

export { Application };
