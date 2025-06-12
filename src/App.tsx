import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";
import HomePage from "@/components/pages/home-page";
import { Routes, Route } from "react-router-dom";
// import { AboutSection } from "./components/sections/about-section";
import "./App.css";
import { Donation } from "./components/pages/Donation";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
