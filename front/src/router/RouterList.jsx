import HomePage from "../pages/HomPage";
import CertificationPage from "../pages/auth/CertificationPage";
import SignUpPage from "../pages/account/SignUpPage";

const RouterList = [
    { path: "/", element: <HomePage /> },
    { path: "/login/Certification", element: <CertificationPage /> },
    { path: "/register", element: <SignUpPage /> },
  ];
  
  export default RouterList;