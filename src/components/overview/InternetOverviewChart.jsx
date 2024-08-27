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
import internetData from "../../data/internetData";

const InternetOverviewChart = () => {
  const [selectedRange, setSelectedRange] = useState("last3Hours");

  const filterDataByRange = () => {
    switch (selectedRange) {
      case "last3Hours":
        return internetData.slice(0, 6); // Display first six data points for demo (6 breakpoints)
      case "last24Hours":
        return internetData.slice(0, 12); // Display 12 data points as a sample for 24 hours
      case "last7Days":
        return internetData.slice(12, 19); // Use indices to show 7 days data
      case "last30Days":
        return internetData.slice(12); // Start from index 12 to show data for the last 30 days
      default:
        return internetData;
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
        Internet Sensor Graph
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
        Internet Speed (Mbps)
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis dataKey={"speed"} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="speed"
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

export default InternetOverviewChart;
