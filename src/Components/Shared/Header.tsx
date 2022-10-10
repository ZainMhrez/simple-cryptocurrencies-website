import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container py-6 mx-auto flex flex-col justify-between items-center sm:flex-row gap-y-5 sm:gap-y-0">
        <h1 className="font-mono font-bold text-3xl text-gradient">
          CryptoCoins
        </h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
