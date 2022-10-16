import { Suspense } from "react";
import Loader from "../Components/Shared/Loader";
import { ExchangesInfinite } from "../Helpers/Imports";

const ExchangesListPage = () => {
  return (
    <main className="container mx-auto mt-12">
      <Suspense fallback={<Loader />}>
        <ExchangesInfinite />
      </Suspense>
    </main>
  );
};

export default ExchangesListPage;
