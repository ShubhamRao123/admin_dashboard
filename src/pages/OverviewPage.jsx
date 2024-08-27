import React from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";

function OverviewPage() {
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
        >
          <StatCard name="Internet Sensor Graph" icon={Send} color="green" />
        </motion.div>
      </main>
    </div>
  );
}

export default OverviewPage;
