import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import InstagramReels from "./pages/work/InstagramReels";
import NYTWatchTab from "./pages/work/NYTWatchTab";
import NYTYouTube from "./pages/work/NYTYouTube";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/uxr-portfolio">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/work/instagram-reels" element={<InstagramReels />} />
          <Route path="/work/nyt-watch-tab" element={<NYTWatchTab />} />
          <Route path="/work/nyt-youtube" element={<NYTYouTube />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
