import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPasswordPage from "./pages/Auth/ResetPassword";
import LoginPage from "./pages/Auth/Login";
import SignupPage from "./pages/Auth/Signup";
import styles from "./scss/App.module.scss";
import SetNewPasswordPage from "./pages/Auth/SetNewPassword";
import Header from "./components/Header/Header";
import FeedPage from "./pages/Feed/Feed";
import AddPost from "./components/CreatePost/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="reset/:token" element={<SetNewPasswordPage />} />
          <Route path="" element={<Header />}>
            <Route path="" element={<FeedPage />} />
          </Route>
        </Routes>
        <AddPost></AddPost>
      </div>
    </BrowserRouter>
  );
}

export default App;
