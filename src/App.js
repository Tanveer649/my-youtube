import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";




const appRouter = createBrowserRouter([
  {
    //When you define a parent route (Body) with children in React Router, the path of the parent (here /)
    // does not automatically match a child unless you explicitly set up a child with path /.

    //  👉 What happens here:
    // When you visit /:
    // The router sees the parent path /, so it renders Body.
    // Then inside Body, it sees there is a child also with path /, so it injects MainContainer into <Outlet />.
    // This is why you must define a child route with path / under the parent / if you want a default page to show.
    // If you did not define a child with path /, the <Outlet /> inside Body would stay empty when you visit /.

    // since the body component is routed with the children Maincontainer and watchpage thats why on place of
    // maincontainer and watchpage <outlet> is defined in Body.js component.

    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
