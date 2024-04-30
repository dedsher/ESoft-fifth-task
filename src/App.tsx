import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@state/store";
import Search from "@pages/Search/Search";
import Movies from "@pages/Movies/Movies";
import MovieAbout from "@pages/MovieAbout/MovieAbout";
import Home from "@pages/Home/Home";
import ErrorPage from "@pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "films",
        element: <Movies />,
      },
      {
        path: "films/:filmId",
        element: <MovieAbout />,
      },
      {
        path: "films/search",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
