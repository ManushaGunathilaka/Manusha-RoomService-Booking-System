// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import LoginPage from "./component/auth/LoginPage";
import RegisterPage from "./component/auth/RegisterPage";
import AdminPage from "./component/admin/AdminPage";
import ManageRoomPage from "./component/admin/ManageRoomPage";
import EditRoomPage from "./component/admin/EditRoomPage";
import AddRoomPage from "./component/admin/AddRoomPage";
import ManageBookingsPage from "./component/admin/ManageBookingsPage";
import EditBookingPage from "./component/admin/EditBookingPage";
import ProfilePage from "./component/profile/ProfilePage";
import { ProtectedRoute, AdminRoute } from "./service/gaurd";
import AllRoomsPage from "./booking_rooms/AllRoomsPage";
import RoomDetailsPage from "./booking_rooms/RoomDetailsPage";
import HomePage from "./component/home/HomePage";
///////////////////////////////////////////////////////////////

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/rooms" element={<AllRoomsPage />} />

            {/* Protected Routes */}
            <Route
              path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetailsPage />} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route
              path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route
              path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route
              path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route
              path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route
              path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
