import registrationDisplay from "./components/registration/registrationDisplay";
import loginPage from "./components/login/loginPage";

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
  }
];

export default routes;
