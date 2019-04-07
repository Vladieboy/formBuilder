// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Dashboard from "./components/dashboard/Dashboard";
import Tree from "./containers/Organization";
import CreateRequest from "./components/request/CreateRequest";
import FormBuilder from "./containers/FormBuilder";

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
  },
  {
    path: "/request/create",
    nav: true,
    component: CreateRequest,
    name: "Create Request"
  },
  {
    path: "/form/create",
    nav: true,
    component: FormBuilder,
    name: "Create Form"
  }
];

export default componentList;
