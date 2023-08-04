import  { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { db } from "./firebase";
import AllReviews from "./pages/AllReviews/AllReviews";
import MobileNav from "./components/MobileNav/MobileNav";
const Home = lazy(() => import("./pages/Home/Home"));
const AllProject = lazy(() => import("./pages/AllProject/AllProject"));
const ReviewForm = lazy(() => import("./components/ReviewForm/ReviewForm"));
const Certificate = lazy(() => import("./pages/Certificates/Certificate"));

const Layout = () => {
  return (
    <>
      <nav className="block sm:hidden">
        <MobileNav />
      </nav>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/review-form",
        element: <ReviewForm db={db} />,
      },
      {
        path: "/all-project",
        element: <AllProject />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
      {
        path: "/all-reviews",
        element: <AllReviews />,
      },
    ],
  },

  // {
  //   path: "/git",
  //   element: <Git />,
  // },
]);

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
