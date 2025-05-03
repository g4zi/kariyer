import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Students from "@/pages/Students";
import Parents from "@/pages/Parents";
import Tests from "@/pages/Tests";
import Appointment from "@/pages/Appointment";
import UsefulLinks from "@/pages/UsefulLinks";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/hakkimda" component={About} />
          <Route path="/ogrenciler" component={Students} />
          <Route path="/veliler" component={Parents} />
          <Route path="/testler" component={Tests} />
          <Route path="/randevu" component={Appointment} />
          <Route path="/linkler" component={UsefulLinks} />
          <Route path="/iletisim" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
