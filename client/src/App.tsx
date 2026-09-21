import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Lineup from "./pages/Lineup";
import NotFound from "./pages/NotFound";
import Tickets from "./pages/Tickets";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lineup" component={Lineup} />
      <Route path="/ingressos" component={Tickets} />
      <Route path="/informacoes" component={Info} />
      <Route path="/duvidas" component={Faq} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Router />
        <Toaster richColors position="top-right" />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
