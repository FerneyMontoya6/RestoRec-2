import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home/Home.jsx";
import { Descubrir } from "../pages/Descubrir/Descubrir.jsx";
import { NuevasExperiencias } from "../pages/NuevasExperiencias/NuevasExperiencias.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <h1>Carechimba 404</h1>
    },
    {
        path: "/descubrir",
        element: <Descubrir></Descubrir>
    },
    {
        path: "/nuevas-experiencias",
        element: <NuevasExperiencias></NuevasExperiencias>
    }
]);
