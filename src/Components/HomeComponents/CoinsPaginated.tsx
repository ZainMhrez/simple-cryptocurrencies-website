import { useState } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ICoins } from "../../interfaces";
import { fetchData } from "../../Helpers/Functions";
import Coin from "./Coin";
import Loader from "../Shared/Loader";

const CoinsPaginated = () => {
  const [page, setPage] = useState<number>(1);

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  }: UseQueryResult<ICoins[], Error> = useQuery(
    ["coins", page],
    () =>
      fetchData(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&price_change_percentage=24h",
        page
      ),
    { keepPreviousData: true, refetchInterval: 30000 }
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="grid grid-cols-auto-fill gap-5">
          {data.map((coin) => (
            <Coin coinData={coin} key={coin.id} />
          ))}
        </div>
      )}
      <div className="w-full mt-10 flex justify-center items-center gap-6">
        <button
          className="bg-slate-900 hover:opacity-80 p-3 rounded-xl cursor-pointer"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          &lt; Previous
        </button>
        <span>Current Page: {page}</span>
        <button
          className="bg-slate-900 hover:opacity-80 py-3 px-4 rounded-xl"
          onClick={() => {
            if (!isPreviousData && data?.values) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || data?.length === 0}
        >
          Next &gt;
        </button>
        {isFetching ? <span> Fetching...</span> : null}{" "}
      </div>
    </div>
  );
};

export default CoinsPaginated;
