import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-3xl font-large text-white">
          <Icon size={30} className="mr-4" style={{ color }} />
          {name}
        </span>

        {/* charts */}
      </div>
    </motion.div>
  );
};

export default StatCard;
