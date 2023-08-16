import "./AllReviews.scss";
// import Review from "../Review/Review";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = onSnapshot(
      collection(db, "reviews"),
      (snapshot) => {
        setReviews(snapshot.docs.map((doc) => doc.data()));
        return getReviews;
      },
      []
    );
  }, []);
  return (
    <>
      <h1 className="text-2xl font-semibold bg-black text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        What Clients Are Saying
      </h1>
      <div className="allReviews d-flex justify-center flex-wrap bg-dark">
        {/* <Review /> */}

        {reviews.map((review) => (
          <div key={review.name} className="max-w-xl px-6 py-10 mx-auto">
            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
              <div className="w-full p-6 bg-slate-400 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0">
                <img
                  className="h-20 w-20 md:mx-6 rounded-full object-cover shadow-md md:h-32 md:w-32 lg:h-40 lg:w-32 md:rounded-2xl"
                  src={review.imgurl}
                  alt="client"
                />
                <div className="mt-2 md:mx-4">
                  <p className="text-lg font-medium text-white">
                    {review.name}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white text-justify md:text-base">
                    {review.review}
                  </p>
                  {/* <div className="flex items-center justify-between mt-4 md:justify-start">
                <button
                  title="left arrow"
                  className="p-1 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  title="right arrow"
                  className="p-1 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-2 hover:bg-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div> */}
                </div>
              </div>
            </main>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllReviews;
