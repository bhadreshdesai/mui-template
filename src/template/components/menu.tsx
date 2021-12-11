import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { DrawerItem } from "./SideBarItem";
import { ROUTES } from "./routes";

export const DRAWER_LIST: DrawerItem[] = [
  {
    route: ROUTES.main,
    literal: "Dashboard",
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.orders,
    literal: "Orders",
    Icon: ShoppingCartIcon,
  },
  {
    route: ROUTES.customers,
    literal: "Customers",
    Icon: PeopleIcon,
  },
  {
    route: ROUTES.inventory,
    literal: "Inventory",
    Icon: AttachMoneyIcon,
  },
];
