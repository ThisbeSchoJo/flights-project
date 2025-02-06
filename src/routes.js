//Will be a data file that contains routes (so doesn't need to be in components folder)
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path:"/",
        element: <App />
        errorElement: <ErrorPage />
    }
]

export default routes;