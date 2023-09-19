import "./App.css";
import Home from "./Home";
import Categorie from "./Categorie";
import Contact from "./Contact";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profil from "./Profil";
import NotFound from "./Error404";
import { useContext } from "react";
import ThemeProvider from "./Context/DataContext";
import "./Compenent/Themes.css"

//React Route:
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound/>,
  },{
    path: "/SignIn",
    element: <SignIn />,
    errorElement: <NotFound/>,
  },
  {
    path: "/Categorie",
    element: <Categorie />,
    errorElement: <NotFound/>,
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <NotFound/>,
  },{
    path: "/SignUp",
    element: <SignUp />,
    errorElement: <NotFound/>,
  },
  {
    path: "/Profil",
    element: <Profil />,
    errorElement: <NotFound/>,
  },
]);

function App() {
  const { theme } = useContext(ThemeProvider);
  return (
    <div className={`main ${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
