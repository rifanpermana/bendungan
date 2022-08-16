import { useRoutes } from "react-router-dom";
import Layout from "../layouts";

// Maps : pilih salah satu
import Map from "../components/maps/google" //leaflet single map
// import Map from "../components/maps/google" //google map single map
// import Map from "../components/maps/leaflet-with-google-layer" //leaflet multi maps inprogress

import AdminDashboards from "../components/admin-dashboards"
import Settings from "../components/settings"
import Faqs from "../components/faqs"
import Dams from "../components/dams/dam"
import List from "../components/lists/list"
import User from "../components/users"

function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Map />,
        },
        {
          path: "admin-dashboards",
          element: <AdminDashboards />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "faqs",
          element: <Faqs />,
        },
        {
          path: "dams",
          element: <Dams />,
        },
        {
          path: "components",
          element: <List />,
        },
        {
          path: "users",
          element: <User />,
        },
      ],
    }
  ];

  return useRoutes(routes);
}

export default Router;
