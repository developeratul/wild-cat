import { select } from "@/redux/features/appSlice";
import { RootState } from "@/redux/store";
import formatNumber from "@/utils/formatNumber";
import generateRandomColorCode from "@/utils/generateRandomColorCode";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  notificationCount: number;
  icon?: string;
  appName: string;
}

const AppIcon: React.FC<Props> = ({ notificationCount, icon, appName }) => {
  const selectedApp = useSelector((state: RootState) => state.app.selected);

  const dispatch = useDispatch();

  const selectApp = () => {
    dispatch(select(appName));
  };

  return (
    <div className="flex items-center gap-1 group">
      {appName === selectedApp ? (
        <div className="w-[4px] h-[16px] group-hover:h-[32px] rounded-r-[4px] bg-[#000000]"></div>
      ) : (
        <div className="w-[0px] h-[0px] group-hover:w-[4px] group-hover:h-[32px] rounded-r-[4px] bg-[#00000000] group-hover:bg-[#000000]"></div>
      )}
      <div className="relative">
        {icon ? (
          <Image src={icon} alt={appName} width={44} height={44} />
        ) : (
          <div
            onClick={selectApp}
            className={`w-[40px] h-[40px] flex items-center justify-center rounded-xl shadow text-white font-bold text-[15px] cursor-pointer`}
            style={{
              backgroundColor: `${generateRandomColorCode()}`,
            }}
          >
            {appName[0]}
          </div>
        )}

        {notificationCount > 0 && (
          <span className="absolute bottom-0 right-[-10%] bg-[#EF5555] text-white h-[16px] min-w-[16px] p-1 flex items-center justify-center text-[11px] rounded-full border-2 border-white font-bold">
            {formatNumber(notificationCount)}
          </span>
        )}
      </div>
    </div>
  );
};

export default AppIcon;
