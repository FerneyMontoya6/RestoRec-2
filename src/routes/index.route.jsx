import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <h1>Carechimba 404</h1>
    }
]);
