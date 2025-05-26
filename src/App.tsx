import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";
import HomePage from "@/components/pages/home-page";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        <HomePage />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;