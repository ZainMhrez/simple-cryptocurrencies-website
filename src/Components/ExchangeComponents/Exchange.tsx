import { IExchange } from "../../interfaces";

const Exchange = ({ exchangeData }: { exchangeData: IExchange }) => {
  return (
    <>
      <article className="flex flex-col bg-slate-900 p-8 rounded-xl text-slate-200 shadow-xl shadow-slate-800">
        <div className="flex justify-between items-center pb-4 border-b-2 border-slate-400">
          <h2 className="text-xl font-semibold">
            {exchangeData.trust_score_rank}. {exchangeData.name}
          </h2>
          <img
            src={exchangeData.image}
            alt={exchangeData.name}
            className="w-8 h-8 aspect-3/2 object-cover"
          />
        </div>
        <ul className="pt-4">
          <li className="pt-4">
            URL:{" "}
            <a
              href={exchangeData.url}
              className="hover:text-slate-300"
              target="_blank"
            >
              {exchangeData.url}
            </a>
          </li>
          <li className="pt-4">
            Trust Score Rank: {exchangeData.trust_score_rank}
          </li>
          <li className="pt-4">
            Year Established: {exchangeData.year_established}
          </li>
          <li className="pt-4">Country: {exchangeData.country}</li>
        </ul>
      </article>
    </>
  );
};

export default Exchange;
