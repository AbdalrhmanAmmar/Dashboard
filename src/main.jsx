import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import BarChart from "./pages/Barchart/Barchart";
import LineChart from "./pages/LineChart/LineChart";
import PieChart from "./pages/PieChart/PieChart";

import Geography from "./pages/Geography/Geography";
import NotFound from "./pages/Notfound/Notfound";
import Team from "./pages/Team/Team";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";
// import Team from "./pages/Team/Team";
// import Dashboard from "./page/dashboard/Dashboard";
// import Team from "./page/team/Team";
// import Contacts from "./page/contacts/Contacts";
// import Invoices from "./page/invoices/Invoices";
// import Form from "./page/form/Form";
// import Calendar from "./page/calendar/Calendar";
// import FAQ from "./page/faq/FAQ";
// import PieChart from "./page/pieChart/PieChart";
// import LineChart from "./page/lineChart/LineChart";
// import Geography from "./page/geography/Geography";
// import NotFound from "./page/notFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Dashboard />} /> */}
      <Route path="/team" element={<Team />} />

      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      {/* <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} /> */}
      <Route path="/bar" element={<BarChart />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/line" element={<LineChart />} />
      <Route path="/geography" element={<Geography />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
