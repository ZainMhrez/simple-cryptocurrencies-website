export interface ICoins {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_24h: number;
  ath: number;
}

export interface IExchange {
  id: string;
  name: string;
  year_established: number;
  country: string;
  url: string;
  image: string;
  trust_score_rank: number;
}
