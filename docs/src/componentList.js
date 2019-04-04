// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Dashboard from './components/dashboard/Dashboard';
import Tree from './containers/Organization';

var componentList = [
    {
      path: "/dashboard",
      nav: true,
      component: Dashboard,
      // icon: ShoppingCartIcon,
      name: "Dashboard"
    },
    {
      path: "/organization",
      nav: true,
      component: Tree,
      name: "Organization"
    }
]

export default componentList