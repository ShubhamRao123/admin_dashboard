import React from "react";
import Header from "../components/common/Header";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import MotionOverviewChart from "../components/overview/MotionOverviewChart";
import LatencyOverviewChart from "../components/overview/LatencyOverviewChart";
import BatteryOverviewChart from "../components/overview/BatteryOverviewChart";
import InternetOverviewChart from "../components/overview/InternetOverviewChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
          <InternetOverviewChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <MotionOverviewChart />
          <LatencyOverviewChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <BatteryOverviewChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
