import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Analytics from "../pages/analytics";
import ProductsForm from "../pages/products-form";
import ProductTable from "../pages/product-table";
import InventoryPage from "../pages/inventorypage";
import StockMovement from "../pages/StockMovement";

// Authentication related imports
import LoginCover from "../pages/login-cover";
import LoginMinimal from "../pages/login-minimal";
import LoginCreative from "../pages/login-creative";
import RegisterForm from "../pages/register-cover"; // Add RegisterForm here
import LoginForm from "../pages/login-cover"; // Add LoginForm here

// PrivateRoute Component
import PrivateRoute from "../components/PrivateRoute";
import ResetForm from "../components/authentication/ResetForm";

// Simulate user authentication (replace with actual logic)
const isAuthenticated = true; // Replace this with your actual authentication logic

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "dashboards/analytics",
        element: (
          <PrivateRoute
            element={<Analytics />}
            isAuthenticated={isAuthenticated}
          />
        ),
      },
      {
        path: "products/form",
        element: (
          <PrivateRoute
            element={<ProductsForm />}
            isAuthenticated={isAuthenticated}
          />
        ),
      },
      {
        path: "product/table",
        element: (
          <PrivateRoute
            element={<ProductTable />}
            isAuthenticated={isAuthenticated}
          />
        ),
      },
      {
        path: "inventory/page",
        element: (
          <PrivateRoute
            element={<InventoryPage />}
            isAuthenticated={isAuthenticated}
          />
        ),
      },
      {
        path: "stock/movement",
        element: (
          <PrivateRoute
            element={<StockMovement />}
            isAuthenticated={isAuthenticated}
          />
        ),
      },
    ],
  },
  {
    path: "/authentication",
    children: [
      { path: "login", element: <LoginCover /> },
      { path: "register/cover", element: <RegisterForm /> },
      { path: "reset/cover", element: <ResetForm /> },
      { path: "/authentication/login/cover", element: <LoginCover /> },

      // Updated login and register routes
      {
        path: "login-form",
        element: <LoginForm registerPath="/authentication/register-form" />,
      }, // For login
      {
        path: "register-form",
        element: <RegisterForm registerPath="/authentication/login-form" />,
      }, // For registration
      {
        path: "reset-form",
        element: <ResetForm resetPath="/authentication/ResetForm" />,
      },
      {
        path: "/authentication/register/cover",
        element: <RegisterForm registerPath="/authentication/login-form" />,
      },
    ],
  },
]);
