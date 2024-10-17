import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import NumerosVaiLendo from "../pages/NumerosVaiLendo";
import NumerosPares from "../pages/NumerosPares";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/exercicioVaiLendo", element: <NumerosVaiLendo />},
    {path: "/numerosPares", element: <NumerosPares/>},
])

export default router;
