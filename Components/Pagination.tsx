import { useSelector, useDispatch } from "react-redux";
import React from "react";

const Pagination = () => {
  return (
    <div
      className="bg-[#F2F2F2] flex gap-[10px] items-center justify-between w-full"
      style={{ padding: "12px 8px 12px 8px" }}
    >
      {/* Items Limitation */}
      <div className="flex gap-[10px]">
        <select
          defaultValue={50}
          className="px-2 py-1 bg-white border border-gray-500 rounded"
        >
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <p className="text-[#86868B]">of {5}</p>
      </div>

      {/* Pagination */}
      <div className="flex gap-[10px] items-center">
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Current Page */}
        <p className="bg-white text-[#1D1D1F] border border-gray-400 px-2 rounded">
          {5}
        </p>{" "}
        / {4}
        <button className="text-[#000]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[24px] h-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
