import { useState } from "react";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import axios from "axios";
import { IExchange } from "../../interfaces";
import Exchange from "./Exchange";

const ExchangesInfinite = () => {
  const [page, setPage] = useState<number>(1);
  const fetchData = async ({ pageParam = 1 }) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/exchanges?per_page=21&page=${pageParam}`
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
  }: UseInfiniteQueryResult<IExchange, Error> = useInfiniteQuery(
    ["infinite"],
    fetchData,
    {
      getNextPageParam: (page) => page,
      refetchOnWindowFocus: false,
    }
  );

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="grid grid-cols-auto-fill gap-5">
        {data?.pages.map((page) =>
          page.map((exchange: IExchange) => (
            <Exchange exchangeData={exchange} key={exchange.id} />
          ))
        )}
      </div>

      <div>
        <button
          onClick={() => {
            fetchNextPage({ pageParam: page + 1 });
            setPage(page + 1);
          }}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default ExchangesInfinite;
