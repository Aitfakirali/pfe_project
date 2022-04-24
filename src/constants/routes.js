import { Absence, Vacation } from "../components";

const routes = [
  {
    path: "/absence",
    Component: Absence,
    title: "Absences"
  },
  {
    path: "/vacation",
    Component: Vacation,
    title: "Vacations"
  },
];


export default routes;