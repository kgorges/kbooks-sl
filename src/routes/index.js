import { Home, LedgerEntryList } from "../views/components";
import ViewListIcon from "@material-ui/icons/ViewList";
import HomeIcon from "@material-ui/icons/Home";

// import { withAuthentication, lazyLoad } from "../views/enhancers";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    navDrawer: true,
    navDrawerLabel: "Home",
    navDrawerIcon: HomeIcon,
  },
  {
    path: "/ledgerEntry",
    component: LedgerEntryList,
    exact: true,
    navDrawer: true,
    navDrawerLabel: "Ledger",
    navDrawerIcon: ViewListIcon,
  },
  /*
  {
    path: "/products/:permalink",
    example: "/products/apple",
    component: ProductDetails,
    exact: true,
  },
  {
    path: "/cart",
    component: lazyLoad(() => import("../views/pages/cart")),
    exact: true,
  },
  {
    path: "/myaccount",
    component: withAuthentication(
      lazyLoad(() => import("../views/pages/myAccount"))
    ),
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  */
];

export default routes;
