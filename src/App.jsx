import "./App.css";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0"></div>
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
      </Routes>
    </div>
  );
};

export default App;
