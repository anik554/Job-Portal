import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from './PrivateRoute';
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/MyApplication";
import AddJob from "../pages/AddJob";
import PostedJobs from "../pages/PostedJobs";
import ViewPostedJob from "../components/ViewPostedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element:  <PrivateRoute><JobDetails /></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element:  <PrivateRoute><JobApply /></PrivateRoute>,
      },
      {
        path:"/appliedJobs",
        element:<PrivateRoute> <MyApplication /> </PrivateRoute>
      },
      {
        path:"/addJob",
        element:<PrivateRoute><AddJob /></PrivateRoute>
      },
      {
        path:"/postedJobs",
        element:<PrivateRoute><PostedJobs /></PrivateRoute>
      },
      {
        path:"/viewApplication/:id",
        element:<PrivateRoute> <ViewPostedJob /> </PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/job-applications/jobPost/${params.id}`)
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
