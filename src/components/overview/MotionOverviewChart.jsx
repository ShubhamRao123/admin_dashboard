import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import motionData from "../../data/motionData";

const MotionOverviewChart = () => {
  const [selectedRange, setSelectedRange] = useState("last3Hours");

  const filterDataByRange = () => {
    switch (selectedRange) {
      case "last3Hours":
        return motionData.slice(0, 8); // 8 data points for the last 3 hours
      case "last24Hours":
        return motionData.slice(0, 16); // Sample of 16 data points for the last 24 hours
      case "last7Days":
        return motionData.slice(16, 23); // 7 days range of data
      case "last30Days":
        return motionData.slice(16); // Data from Day 1 to Day 30
      default:
        return motionData;
    }
  };

  const filteredData = filterDataByRange();

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <span className="flex items-center text-3xl font-large text-white mb-4">
        <Send size={30} className="mr-4" color="green" />
        Motion Sensor Graph
      </span>

      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded ${
            selectedRange === "last3Hours"
              ? "bg-blue-500 text-white"
              : "bg-gray-600 text-gray-200"
          }`}
          onClick={() => setSelectedRange("last3Hours")}
        >
          Last 3 Hours
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedRange === "last24Hours"
              ? "bg-blue-500 text-white"
              : "bg-gray-600 text-gray-200"
          }`}
          onClick={() => setSelectedRange("last24Hours")}
        >
          Last 24 Hours
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedRange === "last7Days"
              ? "bg-blue-500 text-white"
              : "bg-gray-600 text-gray-200"
          }`}
          onClick={() => setSelectedRange("last7Days")}
        >
          Last 7 Days
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedRange === "last30Days"
              ? "bg-blue-500 text-white"
              : "bg-gray-600 text-gray-200"
          }`}
          onClick={() => setSelectedRange("last30Days")}
        >
          Last 30 Days
        </button>
      </div>
      <h2 className="text-lg font-medium mb-4 text-gray-100 text-center">
        Velocity (M/S)
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis dataKey={"velocity"} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="velocity"
              stroke="#3182ce"
              strokeWidth={3}
              dot={{ fill: "#3182ce", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default MotionOverviewChart;
