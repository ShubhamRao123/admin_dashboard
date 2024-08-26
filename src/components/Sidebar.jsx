import React, { useState } from "react";
import {
  Bell,
  Blocks,
  LoaderPinwheel,
  Menu,
  Pin,
  Rocket,
  Settings,
  Table,
  TableOfContents,
  User,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Sidebar() {
  const SIDEBAR_ITEMS = [
    {
      name: "DASHBOARD",
      icon: Blocks,
      href: "/",
    },

    { name: "ICONS", icon: Settings, href: "/settings" },
    {
      name: "MAP",
      icon: Pin,
      href: "/map",
    },
    { name: "NOTIFICATION", icon: Bell },
    { name: "USER PROFILE", icon: User, href: "/users" },
    {
      name: "TABLE LIST",
      icon: Table,
    },
    { name: "TYPOGRAPHY", icon: TableOfContents },
    { name: "RTL SUPPORT", icon: LoaderPinwheel },
    { name: "UPGRADE TO PRO", icon: Rocket },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-blue-500  backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-blue-600 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

export default Sidebar;
