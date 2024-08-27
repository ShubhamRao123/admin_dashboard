import React from "react";
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
const internetData = [
  { name: "9:00", sales: 0 },
  { name: "10:00", sales: 20 },
  { name: "11:00", sales: 30 },
  { name: "12:00", sales: 40 },
  { name: "13:00", sales: 10 },
  { name: "14:00", sales: 50 },
  { name: "15:00", sales: 60 },
  { name: "16:00", sales: 70 },
  { name: "17:00", sales: 80 },
  { name: "18:00", sales: 90 },
  { name: "19:00", sales: 100 },
  { name: "20:00", sales: 200 },
];

const MotionOverviewChart = () => {
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
      <h2 className="text-lg font-medium mb-4 text-gray-100 text-center">
        Velocity (M/S)
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={internetData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis dataKey={"sales"} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
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
