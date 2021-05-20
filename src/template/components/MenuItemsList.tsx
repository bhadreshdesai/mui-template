import React from "react";
import { Grid, List, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { DRAWER_LIST } from "./menu";

const useStyles = makeStyles(() => ({
  padding: {
    padding: 0
  }
}));

const MenuItemsList = () => {
  const classes = useStyles();

  //const { pathname } = useLocation();
  const pathname = "";
  return (
    <Grid>
      <List className={classes.padding}>
        {DRAWER_LIST.map(({ literal, route, Icon }) => (
          <MenuItem
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

export default MenuItemsList;
