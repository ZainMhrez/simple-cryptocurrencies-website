import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="block fixed p-4 bg-slate-100 text-slate-900 font-medium right-4 bottom-4 rounded-full"
          onClick={goToTop}
        >
          TOP
        </button>
      )}
    </>
  );
};

export default BackToTop;
