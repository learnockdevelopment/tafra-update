import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import { BooksProvider } from "./context/addToCart";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BooksProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/events" element={<Events />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:bookId" element={<BookDetails />} />
              <Route path="/releases" element={<Store />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </BooksProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;