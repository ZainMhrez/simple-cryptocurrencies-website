import { lazy } from "react";

// Import Pages
import HomePage from "../Pages/HomePage";
import ExchangesListPage from "../Pages/ExchangesListPage";

// Import shared components
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";

// import Home components
import Coin from "../Components/HomeComponents/Coin";
const CoinsInfinite = lazy(
  () => import("../Components/HomeComponents/CoinsInfinite")
);

// import ExchangesList Components
import Exchange from "../Components/ExchangeComponents/Exchange";
const ExchangesInfinite = lazy(
  () => import("../Components/ExchangeComponents/ExchangesInfinite")
);

export {
  HomePage,
  ExchangesListPage,
  Header,
  Footer,
  CoinsInfinite,
  Coin,
  ExchangesInfinite,
  Exchange,
};
