import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage, ExchangesListPage, Header, Footer } from "./Helpers/Imports";
import BackToTop from "./Components/Shared/BackToTop";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Router basename="/simple-cryptocurrencies-website">
      <QueryClientProvider client={queryClient}>
        <Header />
        <BackToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exchanges" element={<ExchangesListPage />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
