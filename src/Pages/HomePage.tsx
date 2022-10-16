import { Suspense } from "react";
import Loader from "../Components/Shared/Loader";
import { CoinsInfinite } from "../Helpers/Imports";

const HomePage = () => {
  return (
    <main className="container mx-auto mt-12">
      <Suspense fallback={<Loader />}>
        <CoinsInfinite />
      </Suspense>
    </main>
  );
};

export default HomePage;
