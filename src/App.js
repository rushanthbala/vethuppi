// admin bootstrap css here
import React from "react";

import "./assets/admin/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/admin/vendor/bootstrap-icons/bootstrap-icons.css";

// admin custom css here
import "./assets/admin/css/style.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// user pages

// admin pages
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Customers from "./pages/admin/Customers";
import Orders from "./pages/admin/Orders";

import ProductDetail from "./pages/admin/Product-detail";
import CustomerDetail from "./pages/admin/Customer-detail";
import OrderDetail from "./pages/admin/Order-detail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* user pages */}

        {/* admin pages */}
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/products" element={<Products />} />
        <Route exact path="/admin/customers" element={<Customers />} />
        <Route exact path="/admin/orders" element={<Orders />} />

        <Route
          exact
          path="/admin/products/product-detail/:id"
          element={<ProductDetail />}
        />
        <Route
          exact
          path="/admin/customers/customer-detail"
          element={<CustomerDetail />}
        />
        <Route
          exact
          path="/admin/orders/order-detail"
          element={<OrderDetail />}
        />
      </Routes>
    </Router>
  );
}
