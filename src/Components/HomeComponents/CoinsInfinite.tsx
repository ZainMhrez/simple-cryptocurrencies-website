import { useState } from "react";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import axios from "axios";
import { ICoins } from "../../interfaces";
import Coin from "./Coin";
import Loader from "../Shared/Loader";

const CoinsInfinite = () => {
  const [page, setPage] = useState<number>(1);
  const fetchData = async ({ pageParam = 1 }) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=21&sparkline=false&price_change_percentage=24h&page=${pageParam}`
    );
    return res.data;
  };

  const {
    data,
    error,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  }: UseInfiniteQueryResult<ICoins, Error> = useInfiniteQuery(
    ["infinite"],
    fetchData,
    {
      getNextPageParam: (page) => page,
      refetchOnWindowFocus: false,
    }
  );

  return status === "loading" ? (
    <Loader />
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="grid grid-cols-auto-fill gap-5">
        {data?.pages.map((page) =>
          page.map((coin: ICoins) => <Coin coinData={coin} key={coin.id} />)
        )}
      </div>

      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => {
            fetchNextPage({ pageParam: page + 1 });
            setPage(page + 1);
          }}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? (
            <Loader />
          ) : hasNextPage ? (
            <span className="bg-slate-900 text-slate-100 font-medium p-4 rounded-2xl hover:opacity-80">
              Load More
            </span>
          ) : (
            "Nothing more to load"
          )}
        </button>
      </div>
      {/* <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div> */}
    </>
  );
};

export default CoinsInfinite;
