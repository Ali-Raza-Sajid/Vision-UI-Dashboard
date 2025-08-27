import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./views/Dashboard";
import Table from "./views/Table";
import Billing from "./views/Billing";
import Profile from "./views/Profile";
import SignUp from "./views/SignUp";
import Login from "./views/Login";

import { AuthProvider } from "./context/AuthContext";
import { RouteWithTitle } from "./routes/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" 
            element={<RouteWithTitle element={<Dashboard />} title="Dashboard" protected/>}/>

            <Route path="/table"
              element={<RouteWithTitle element={<Table />} title="Table" protected/>}/>
              
            <Route path="/billing"
              element={<RouteWithTitle element={<Billing />} title="Billing" protected />}/>

            <Route path="/profile"
              element={<RouteWithTitle element={<Profile />} title="Profile" protected />}/>

          </Routes>
        </Layout>
            <Routes>

              <Route path="/signup"
              element={<RouteWithTitle element={<SignUp />} title="Sign Up" />}/>

              <Route path="/login" 
              element={<RouteWithTitle element={<Login />} title="Login" />}/>

            </Routes>
            
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;