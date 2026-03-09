/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactsAdmin = () => {
  const [contacts, setContacts] = useState([]);
   const API_URL= import.meta.env.VITE_BACKEND_URL;
  const fetchContacts = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/contact/get-contacts`);
      setContacts(data.contacts || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

 
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Contacts</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {contacts?.map((contact) => (
          <motion.div
            key={contact._id}
            whileHover={{ scale: 1.03 }}
            className="p-4 border rounded bg-white shadow-md"
          >
            <p className="font-bold">Name: {contact.name}</p>
            <p className="text-sm">Email: {contact.email}</p>
            <p className="mt-2">{contact.message}</p>
           
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactsAdmin;