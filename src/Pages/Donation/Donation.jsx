import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getStoredDonationData } from "../../utility/localstorage";
import DonatedCard from "../../Components/DonatedCard/DonatedCard";
const Donation = () => {
  const categories = useLoaderData();
  const [donations, setDonations] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    const storedDonationId = getStoredDonationData();
    if (categories.length > 0) {
      const donationData = categories.filter((card) =>
        storedDonationId.includes(card.id)
      );
      setDonations(donationData);
    }
  }, [categories]);

  return (
    <div className="py-20 max-w-screen-xl mx-auto px-5">
      {donations.length === 0 && (
        <div className="m-10 md:m-20 text-2xl md:text-3xl text-center">
          There are no recent donations to display. <br /> Check back later to
          see your donation history as you contribute to our mission.
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full md:w-3/4 lg:w-auto mx-auto">
        {seeAll
          ? donations.map((donatedCard) => (
              <DonatedCard
                key={donatedCard.id}
                donatedCard={donatedCard}
              ></DonatedCard>
            ))
          : donations
              .slice(0, 4)
              .map((donatedCard) => (
                <DonatedCard
                  key={donatedCard.id}
                  donatedCard={donatedCard}
                ></DonatedCard>
              ))}
      </div>
      {
        <div
          className={`${
            donations.length <= 4 ? "hidden" : ""
          } text-center my-5`}
        >
          <button
            onClick={() => setSeeAll(!seeAll)}
            className={`font-semibold px-3 lg:px-4 py-1 lg:py-2 bg-[#009444] rounded-md text-white ${
              seeAll ? "hidden" : ""
            }`}
          >
            See All
          </button>
        </div>
      }
    </div>
  );
};

export default Donation;
