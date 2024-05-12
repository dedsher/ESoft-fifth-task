import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@state/store";
import Search from "@pages/Search/Search";
import Films from "@pages/Films/Films";
import FilmAbout from "@pages/FilmAbout/FilmAbout";
import Home from "@pages/Home/Home";
import ErrorPage from "@pages/ErrorPage/ErrorPage";
import Index from "@pages/Index/Index";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@muiTheme/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "films",
        element: <Films />,
      },
      {
        path: "films/:filmId",
        element: <FilmAbout />,
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
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
