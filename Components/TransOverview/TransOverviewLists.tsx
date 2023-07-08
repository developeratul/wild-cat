import { fetchCharacters, selectCharacter } from "@/redux/features/characterSlice";
import { useAppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TransLoading from "./TransLoading";
import TransOverview from "./TransOverview";

const TransOverviewLists: React.FC = () => {
  const dispatch = useAppDispatch();
  const { characters, loading } = useSelector(selectCharacter);

  useEffect(() => {
    dispatch(fetchCharacters({ currentPage: 1 }));
  }, [dispatch]);

  if (loading) return <TransLoading />;

  return (
    <div className="flex flex-col gap-2">
      {characters.map((character, i) => (
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
