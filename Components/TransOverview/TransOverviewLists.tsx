import React from "react";
import TransOverview from "./TransOverview";

const TransOverviewLists: React.FC = () => {
  const dummyData = [
    {
      name: "John Doe",
      image:
        "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {dummyData.map((character, i) => (
        <TransOverview
          key={i}
          name={character.name}
          date="Apr 25"
          reason="Merchandise / Services not received"
          amount="258.69"
          cardNumber="5567"
          avatar={character?.image}
        />
      ))}
    </div>
  );
};

export default TransOverviewLists;
