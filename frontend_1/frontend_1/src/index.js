// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 correct import for createRoot
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css'; // Optional: if using Bootstrap
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdminDashboard from './components/AdminDashboard/Admindashboard';
import Courses from './components/AdminDashboard/Courses';
import Users from './components/AdminDashboard/Users';
import Feedback from './components/AdminDashboard/Feedback';
import StaffDashboard from './components/StaffDashboard/StaffDashboard';
import Home from './components/StaffDashboard/Home';
import Announcements from './components/StaffDashboard/Announcements';
import CourseMaterial from './components/StaffDashboard/CourseMaterial';
import Profile from './components/StaffDashboard/Profile';
import HomePage from './components/HomePage';
// import StudentDashboard from './components/StudentDashboard/StudentDashboard';

import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import StudentHome from './components/StudentDashboard/StudentHome';
import PlacementDashboard from './components/StudentDashboard/PlacementDashboard';
import ContactCard from './components/ContactCard';
import CourseFeatures from './components/CourseFeatures';
// import Footer from '../../../../Exam/frontend(New)/frontend/src/components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      // {
      //   path:"/",
      //   element:<LoginForm/>
      // },

      {
        path: '',
        element: <HomePage />,  // default page at '/'
      },
      {
        path: '/login',
        element: <LoginForm />,
      },

      {
        path:"/register",
        element:<RegisterForm/>,
      },
      {
        path:"/about",
        element:<aboutModal />,
      },
      {
        path:"/courses",
        element:<CourseFeatures />,
      },

      {
        path:"/contact",
        element:<ContactCard />,
      },

      // {
      //   path:"/footer",
      //   element:<Footer />,n
      // },

      {
        path: 'staff/*',
        element: <StaffDashboard />,  // This could be your staff main dashboard layout/component
        children: [
          {
            path: '',  // default child path of /staff (like /staff)
            element: <Home />,
          },
          {
            path: 'announcement',
            element: <Announcements />,
          },
          {
            path: 'course-material',
            element: <CourseMaterial />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },

      {
        path: 'student/*',  // <----- add this block for student routes
        element: <StudentDashboard />,
        children: [
          {
            path: '',  // default child path of /staff (like /staff)
            element: <StudentHome />,
          },

        ],
      },
      {
        path:"/admin",
        element:<AdminDashboard/>,
        children:[
          {
        path:"courses",
        element:<Courses/>
      },
      {
        path:"users",
        element:<Users/>
      },
      {
        path:"feedback",
        element:<Feedback/>
      },
        ]
      },
      
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Provider store={store}>
      <RouterProvider router={router} >
        {/* <App /> */}
      </RouterProvider>
    </Provider>
);