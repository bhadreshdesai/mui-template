import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  SvgIconTypeMap,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
      },
      "&$selected": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
      },
    },
    selected: {},
    listIcon: {
      minWidth: "auto",
      paddingRight: theme.spacing(2),
    },
    icon: {
      color: theme.palette.secondary.main,
    },
  })
);

export type DrawerItem = {
  route?: string;
  literal: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
};

type SideBarItemProps = DrawerItem & {
  selected?: boolean;
  onClick?: () => void;
};

const SideBarItem: React.FC<SideBarItemProps> = ({
  route,
  literal,
  Icon,
  selected,
  onClick,
}) => {
  const classes = useStyles();

  const link = (
    <ListItem
      button
      selected={selected}
      classes={{
        selected: classes.selected,
        button: classes.button,
      }}
      onClick={onClick}
    >
      <ListItemIcon className={classes.listIcon}>
        <Icon className={classes.icon} />
      </ListItemIcon>
      <ListItemText primary={literal} />
    </ListItem>
  );
  return link;
  //return route ? <Link to={route}>{link}</Link> : link;
};

export default SideBarItem;
