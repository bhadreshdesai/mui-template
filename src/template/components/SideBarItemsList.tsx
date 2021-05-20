import React from "react";
import { Grid, List, makeStyles } from "@material-ui/core";
import SideBarItem from "./SideBarItem";
import { DRAWER_LIST } from "./menu";

const useStyles = makeStyles(() => ({
  padding: {
    padding: 0
  }
}));

const SideBarItemsList = () => {
  const classes = useStyles();

  //const { pathname } = useLocation();
  const pathname = "";
  return (
    <Grid>
      <List className={classes.padding}>
        {DRAWER_LIST.map(({ literal, route, Icon }) => (
          <SideBarItem
            Icon={Icon}
            literal={literal}
            //route={route}
            key={route}
            selected={pathname === route}
          />
        ))}
      </List>
    </Grid>
  );
};

export default SideBarItemsList;
