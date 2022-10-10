import { ICoins } from "../../interfaces";
import { numberWithCommas } from "../../Helpers/Functions";

const Coin = ({ coinData }: { coinData: ICoins }) => {
  return (
    <>
      <article className="flex flex-col bg-slate-900 p-8 rounded-xl text-slate-200 shadow-xl shadow-slate-800">
        <div className="flex justify-between items-center pb-4 border-b-2 border-slate-400">
          <h2 className="text-xl font-semibold">
            {coinData.market_cap_rank}. {coinData.name}
          </h2>
          <img
            src={coinData.image}
            alt={coinData.name}
            className="w-10 aspect-4/3 object-contain"
          />
        </div>
        <ul className="pt-4">
          <li className="">Symbol: {coinData.symbol.toUpperCase()}</li>
          <li className="pt-4">
            Price: {numberWithCommas(coinData.current_price)} $
          </li>
          <li className="pt-4">
            Market Cap: {numberWithCommas(coinData.market_cap)} $
          </li>
          {coinData.price_change_24h >= 0 ? (
            <li className="pt-4 text-green-500">
              Price Change 24h: {coinData.price_change_24h?.toFixed(2)} $
            </li>
          ) : (
            <li className="pt-4 text-red-500">
              Price Change 24h: {coinData.price_change_24h?.toFixed(2)} $
            </li>
          )}
          <li className="pt-4 text-green-500">
            ATH: {numberWithCommas(coinData.ath)} $
          </li>
        </ul>
      </article>
    </>
  );
};

export default Coin;
