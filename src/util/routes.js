import { Navigate } from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Write from "../pages/Write";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Intro from "../pages/Intro";
import FAQ from "../pages/FAQ";
import Land from "../pages/Land";
import Factory from "../pages/Factory";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "intro", element: <Intro /> },
      { path: "/", element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
    ],
  },
  {
    path: "/main",
    element: <Layout />,
    children: [
      { path: "page/:id", element: <CardDetail /> },
      { path: "write", element: <Write /> },
      { path: "faq", element: <FAQ /> },
      { path: "land", element: <Land /> },
      { path: "factory", element: <Factory /> },
    ],
  },
];

export default routes;