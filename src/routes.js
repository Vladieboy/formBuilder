import registrationDisplay from "./components/registration/registrationDisplay";
import loginPage from "./components/login/loginPage";
import rolesPage from "./components/dash/rolesPage";
import PTO from "./components/dash/myPTO";
// import FormBuilder from "./components/dash/formbuilder";
import companyStructurePage from "./components/dash/comapnyStructurePage";
import Requests from "./components/dash/Requests";
import Dash from "./components/dash/dash";
import FormDisplayContainer from "./components/forms/formDisplayContainer"
import FormBuilder from "./components/forms/formBuilder"


const routes = [
  {
    path: "/registration",
    name: "registration",
    component: registrationDisplay,
    display: true
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
    display: true
  },
  // {
  //   path: "/roles",
  //   name: "roles",
  //   component: rolesPage,
  //   display: false
  // },
  {
    path: "/requests",
    name: "reqs",
    component: Requests,
    display: true
  },
  {
    path: "/companyStructurePage",
    name: "companyStructurePage",
    component: companyStructurePage,
    display: true
  },
  {
    path: "/FormBuilder",
    name: "FormBuilder",
    component: FormBuilder,
    display: true
  },
  // {
  //   path: "/PTO",
  //   name: "PTO",
  //   component: PTO,
  //   display: true
  // },
  {
    path: "/dash",
    name: "Dash",
    component: Dash,
    display: true
  },
  {
    path: "/fdc",
    name: "formDisplayContainer",
    component: FormDisplayContainer,
    display: true
  },
];

export default routes;
