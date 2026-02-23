import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import InstagramReels from "./pages/work/InstagramReels";
import NYTWatchTab from "./pages/work/NYTWatchTab";
import NYTYouTube from "./pages/work/NYTYouTube";
import InstagramReelsAnthropic from "./pages/work/InstagramReelsAnthropic";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/uxr-portfolio">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/work/instagram-reels" element={<ProtectedRoute><InstagramReels /></ProtectedRoute>} />
          <Route path="/work/nyt-watch-tab" element={<ProtectedRoute><NYTWatchTab /></ProtectedRoute>} />
          <Route path="/work/nyt-youtube" element={<ProtectedRoute><NYTYouTube /></ProtectedRoute>} />
          <Route path="/work/instagram-reels-anthropic" element={<ProtectedRoute><InstagramReelsAnthropic /></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
