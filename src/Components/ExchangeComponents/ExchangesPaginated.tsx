import { useState } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IExchange } from "../../interfaces";
import { fetchData } from "../../Helpers/Functions";
import Exchange from "./Exchange";
import Loader from "../Shared/Loader";

const ExchangesPaginated = () => {
  const [page, setPage] = useState<number>(1);

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  }: UseQueryResult<IExchange[], Error> = useQuery(
    ["exchanges", page],
    () =>
      fetchData(
        "https://api.coingecko.com/api/v3/exchanges?per_page=100",
        page
      ),
    {
      keepPreviousData: true,
    }
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="grid grid-cols-auto-fill gap-5">
          {data.map((exchange) => (
            <Exchange exchangeData={exchange} key={exchange.id} />
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
        </button>{" "}
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

export default ExchangesPaginated;
