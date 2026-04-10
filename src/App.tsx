import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CFTV from "./pages/CFTV";
import CFTVNaval from "./pages/CFTVNaval";
import Cabeamento from "./pages/Cabeamento";
import Internet from "./pages/Internet";
import Carregadores from "./pages/Carregadores";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Cases from "./pages/Cases";
import PIM from "./pages/PIM";
import Academia from "./pages/Academia";
import Insights from "./pages/Insights";
import Artigo from "./pages/Artigo";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cftv" element={<CFTV />} />
          <Route path="/cftv-naval" element={<CFTVNaval />} />
          <Route path="/cabeamento" element={<Cabeamento />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/carregadores" element={<Carregadores />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/pim" element={<PIM />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Artigo />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
