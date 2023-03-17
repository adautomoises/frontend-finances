import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DashboardLayout } from "./layouts/Dashboard";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Spending } from "./pages/Spending";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ForgetPassword } from "./pages/ForgetPassword";
import { SignInUpLayout } from "./layouts/SignInUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInUpLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<SignUp />} />
          <Route path="/entrar" element={<SignIn />} />
          <Route path="/recuperar-senha" element={<ForgetPassword />} />
        </Route>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gastos" element={<Spending />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
