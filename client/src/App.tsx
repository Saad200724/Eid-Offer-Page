import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";
import OrdersPage from "./pages/OrdersPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import { useState } from "react";
import { Language } from "./pages/Home";

function Router() {
  const [lang, setLang] = useState<Language>("bn");
  return (
    <Switch>
      <Route path="/">
        <Home lang={lang} setLang={setLang} />
      </Route>
      <Route path="/order" component={OrdersPage} />
      <Route path="/terms">
        <TermsPage lang={lang} />
      </Route>
      <Route path="/privacy">
        <PrivacyPage lang={lang} />
      </Route>
      <Route path="/contact">
        <ContactPage lang={lang} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
