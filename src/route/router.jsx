import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Analytics from "../pages/analytics";
import ProductsForm from "../pages/products-form";
import ProductTable from "../pages/product-table";
import InventoryPage from "../pages/inventorypage"; // Make sure you create this page

// Authentication related imports
import LoginCover from "../pages/login-cover";
import LoginMinimal from "../pages/login-minimal";
import LoginCreative from "../pages/login-creative";
import StockMovement from "../pages/StockMovement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboards/analytics",
        element: <Analytics />,
      },
      {
        path: "/products/form",
        element: <ProductsForm />,
      },
      {
        path: "/product/table",
        element: <ProductTable />,
      },
      // Add the InventoryPage route here
      {
        path: "/inventory/page",
        element: <InventoryPage />,
      },
      {
        path: "/Stock/Movement",
        element: <StockMovement />,
      },
    ],
  },
  {
    path: "/authentication/login",
    element: <LoginCover />,
    children: [
      {
        path: "cover", // relative path
        element: <LoginCover />,
      },
      {
        path: "minimal",
        element: <LoginMinimal />,
      },
      {
        path: "creative",
        element: <LoginCreative />,
      },
    ],
  },
]);
