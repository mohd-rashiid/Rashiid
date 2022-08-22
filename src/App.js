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
// import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentCreate from "./pages/StudentCreate";
import Students from "./pages/Students";
import Home from "./pages/Home";
import Layout from "./component/layout";

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
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/lay" element={<Layout />} /> */}
            {/* <Route path="/Login" element={<Login />} /> */}
            <Route path="/About" element={<About />} />
            <Route path="/StudentCreate" element={<StudentCreate />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/CreateCategory" element={<CourseCategory />} />
            <Route path="/CategoryList" element={<CategoryList />} />
            <Route path="/CreateCourse" element={<CreateCourse />} />
            <Route path="/Courses" element={<Courses />} />

            {/* <Route path="/home" element={<Navigate replace to="/" />} /> */}
          </Routes>
        </Layout>
      </Router>

      <Footer />
    </>
  );
}

export default App;
