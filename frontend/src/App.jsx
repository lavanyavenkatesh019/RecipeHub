import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "../Components/Landing";
import Login from "../Components/Login";
import Signin from "../Components/Signin";
import Home from "../Components/Home";
import Recipes from "../Components/Recipes";
import ViewRecipe from "../Components/ViewRecipe";
import UserDashboard from "../Components/UserDashboard";
import AdminPanel from "../Components/AdminPanel";
import UserManagement from "../Components/UserManagement";
import RecipeManagement from "../Components/RecipeManagement";
import Reports from "../Components/Reports";
import VeganRecipe from "../Components/VeganRecipe";
import Protected from "../Components/Protected";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          
          <Route path="/Home" element={<Home />} />
          {/* Protected Routes */}
          <Route element={<Protected />}>
            <Route path="/Home/Recipes" element={<Recipes />} />
            <Route path="/Home/UserDashboard" element={<UserDashboard />} />
            <Route path="/ViewRecipe/:id" element={<ViewRecipe />} />
            <Route path="/Vegan" element={<VeganRecipe />} />
            
            {/* Admin Routes */}
            <Route path="/Home/AdminPanel" element={<AdminPanel />} />
            <Route path="/Home/UserManagement" element={<UserManagement />} />
            <Route path="/Home/RecipeManagement" element={<RecipeManagement />} />
            <Route path="/Home/Reports" element={<Reports />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
