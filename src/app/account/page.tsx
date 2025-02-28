"use client";

import React, { useState } from "react";
import Layout from "../layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Account() {
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [orders] = useState([
    { id: 1, date: "2025-02-15", total: "$150", status: "Shipped" },
    { id: 2, date: "2025-01-30", total: "$200", status: "Delivered" },
    { id: 3, date: "2025-01-10", total: "$100", status: "Canceled" },
  ]);

  const [wishlist] = useState([
    { id: 1, name: "Wishlist Item 1", price: "$50" },
    { id: 2, name: "Wishlist Item 2", price: "$75" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveDetails = () => {
    setEditMode(false);
    // Save user details to the server or state here
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Account
        </motion.h1>

        {/* Account Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Account Details</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {editMode ? (
              <div className="space-y-4">
                <Input
                  label="Name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                />
                <Input
                  label="Email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                />
                <Input
                  label="Phone"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                />
                <Button onClick={saveDetails} className="mt-4">
                  Save
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <p><strong>Phone:</strong> {userDetails.phone}</p>
                <Button onClick={toggleEditMode} className="mt-4">
                  Edit
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Order History */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Order History</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2">Order ID</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.date}</td>
                    <td className="py-2">{order.total}</td>
                    <td className="py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wishlist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Wishlist</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <p className="font-bold">{item.name}</p>
                  <p>{item.price}</p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}