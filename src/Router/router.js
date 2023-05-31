import { createBrowserRouter } from "react-router-dom";

import WrapperLayout from "../pages/WrapperLayout";
import ErrorPage from "../pages/ErrorPage";
import AssessmentLandingPage from "../pages/AssessmentLandingPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    //wrapper required since Links only work in RouterProvider
    element: <WrapperLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/test", element: <AssessmentLandingPage /> },
    ],
  },
]);

export default router;
