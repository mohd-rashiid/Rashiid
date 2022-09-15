import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import About from "./pages/About";
import CategoryList from "./pages/CategoryList";
import CourseCategory from "./pages/CourseCategory";
import Courses from "./pages/Courses";
import CreateCourse from "./pages/CreateCourse";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentCreate from "./pages/StudentCreate";
import Students from "./pages/Students";
import Home from "./pages/Home";
import Layout from "./component/layout";
import UpdateCourses from "./pages/UpdateCourses";
import UpdateCategory from "./pages/UpdateCategory";
import UpdateDetails from "./pages/UpdateDetails";
import StudentView from "./pages/StudentView";
import CourseView from "./pages/CourseView";
// import student_view from "./pages/StudentView";
// import Logout from "./pages/Logout";
import "./App.css";

import View from "./pages/View";
// import StudentView from "./pages/StudentView";

function App() {
  // window.isNav = true;
  // // const location = useLocation();
  // const LoginPage = {
  //     LandingPage

  // }

  const token = sessionStorage.getItem("token");

  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/home" element={<Home />} />
          {/* <Route path="/Logout" element={<Logout />} /> */}
          {/* <Route path="/lay" element={<Layout />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/StudentCreate" element={<StudentCreate />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/StudentView/:id" element={<StudentView />} />
          <Route path="/updatedetails/:id" element={<UpdateDetails />} />
          <Route path="/CreateCategory" element={<CourseCategory />} />
          <Route path="/CategoryList" element={<CategoryList />} />
          <Route path="/CourseView/:id" element={<CourseView />} />
          {/* <Route path="/NewCoursesView/:id" element={<NewCoursesView />} /> */}
          <Route path="/View/:id" element={<View />} />
          <Route path="/CreateCourse" element={<CreateCourse />} />
          <Route path="/updatecategory/:id" element={<UpdateCategory />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/updatecourse" element={<UpdateCourses />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

          {/* <Route path="/home" element={<Navigate replace to="/" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
