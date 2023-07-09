import AvatarSrc from "@/assets/avatar.jpg";
import Image from "next/image";
import UserInfo from "./UserInfo";
import UserPostRoot, { DisputePost, UserPostWithoutLink } from "./UserPost";
import { Separator } from "./ui/separator";

export default function ContentPanel() {
  return (
    <div className="h-screen overflow-hidden w-full flex flex-col justify-center items-center pt-[58px]">
      <div className="flex flex-col gap-5 w-full h-full overflow-hidden hover:overflow-y-auto max-w-[937px]">
        <UserInfo
          avatar=""
          description="All your interactions and the actions from Leslie Alexander will be visible here. You can also tag your team, add comments and more."
          name="Leslie Alexander"
        />
        <Separator />
        <UserPostRoot />
        <UserPostWithoutLink />
        <DisputePost />
      </div>
      <div className="h-[100px] w-full flex justify-center items-center">
        <div className="w-full max-w-[937px]">
          <div className="w-full flex justify-between py-2 px-[10px] gap-2 items-center self-stretch bg-[#F2F2F2] border border-[#D2D2D7] rounded-[16px]">
            <div className="flex-shrink-0">
              <Image
                src={AvatarSrc}
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full bg-center object-cover"
              />
            </div>
            <div className="flex-1 w-full">
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none placeholder:text-[#86868B] placeholder:font-[400] placeholder:text-[15px]"
                placeholder="Tag your team, add a comment..."
              />
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.79247 6.0418C5.48295 6.23376 6.62131 9.0029 6.89898 9.45384C7.01585 9.64254 7.20205 9.77694 7.41691 9.82767C7.63178 9.87839 7.85782 9.84132 8.04565 9.72456C8.23348 9.60779 8.36783 9.42082 8.41934 9.2045C8.47085 8.98819 8.43533 8.76011 8.32055 8.57012C8.04565 8.11778 6.10129 5.84914 5.79247 6.0418ZM5.5605 3.0102C6.88721 2.54343 8.33163 2.54343 9.65833 3.0102C9.88614 3.08977 10.188 2.92992 10.0544 2.58369C9.95677 2.3324 9.8626 2.08669 9.82452 1.98687C9.73381 1.75023 9.40906 1.55478 9.2678 1.52267C8.73324 1.40121 8.17929 1.3335 7.60942 1.3335C7.03954 1.3335 6.48559 1.40121 5.95034 1.52267C5.80909 1.55478 5.48503 1.75023 5.39432 1.98687L5.16443 2.58369C5.03079 2.92992 5.33269 3.09047 5.5605 3.0102ZM13.9092 3.55746C13.6403 3.23227 13.343 2.93207 13.0208 2.66048C12.9149 2.57043 12.6033 2.49714 12.4059 2.69608L11.2648 3.84576C11.5491 4.04829 11.8165 4.27381 12.0645 4.52007C12.3152 4.77206 12.5333 5.04499 12.7334 5.32631L13.8739 4.17663C14.0719 3.97699 13.9992 3.66357 13.9092 3.55746ZM7.60942 3.35782C6.87281 3.35773 6.1434 3.50391 5.46284 3.78802C4.78228 4.07213 4.16389 4.48859 3.643 5.01364C3.12211 5.53869 2.70891 6.16203 2.427 6.84806C2.1451 7.5341 2 8.2694 2 9.01198C1.99991 9.75461 2.14494 10.49 2.42681 11.1761C2.70867 11.8622 3.12186 12.4856 3.64276 13.0108C4.16366 13.5359 4.78207 13.9524 5.46268 14.2366C6.14328 14.5207 6.87275 14.6669 7.60942 14.6668C9.09703 14.6668 10.5237 14.0711 11.5756 13.0107C12.6275 11.9502 13.2185 10.512 13.2185 9.01233C13.2185 7.51266 12.6275 6.07441 11.5756 5.01399C10.5237 3.95356 9.09703 3.35782 7.60942 3.35782ZM7.60942 13.2707C7.05469 13.2707 6.5054 13.1605 5.99291 12.9465C5.48043 12.7324 5.01478 12.4187 4.62256 12.0232C4.23034 11.6278 3.91922 11.1583 3.70698 10.6416C3.49473 10.125 3.38552 9.5712 3.38556 9.01198C3.38561 8.45275 3.49492 7.89902 3.70724 7.38238C3.91957 6.86574 4.23076 6.39632 4.62305 6.00093C5.01533 5.60553 5.48103 5.29189 5.99355 5.07793C6.50607 4.86397 7.05538 4.75386 7.61011 4.75391C8.73034 4.754 9.80466 5.20271 10.5967 6.00132C11.3888 6.79992 11.8337 7.88302 11.8336 9.01233C11.8335 10.1416 11.3884 11.2247 10.5962 12.0231C9.80404 12.8216 8.72965 13.2701 7.60942 13.27V13.2707Z"
                    fill="#1D1D1F"
                  />
                </svg>
                <span className="text-[13px] text-[#1D1D1F] font-[400] leading-[24px]">
                  30 days
                </span>
              </div>
              <div className="w-[1px] mx-2 h-[12px] bg-[#D2D2D7]" />
              <button className="p-3 rounded-full bg-[#187FE7] text-white flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 7.92308C2 7.73076 2.07901 7.54631 2.21964 7.41032C2.36028 7.27433 2.55103 7.19793 2.74992 7.19793L11.4384 7.19793L8.2183 4.08562C8.14858 4.0182 8.09327 3.93815 8.05554 3.85007C8.0178 3.76198 7.99838 3.66756 7.99838 3.57221C7.99838 3.47687 8.0178 3.38245 8.05554 3.29436C8.09327 3.20627 8.14858 3.12623 8.2183 3.05881C8.28803 2.99139 8.3708 2.93791 8.4619 2.90142C8.553 2.86493 8.65064 2.84615 8.74925 2.84615C8.84785 2.84615 8.94549 2.86493 9.03659 2.90142C9.12769 2.93791 9.21046 2.99139 9.28019 3.05881L13.7797 7.40967C13.8495 7.47703 13.9049 7.55706 13.9427 7.64515C13.9805 7.73325 14 7.8277 14 7.92308C14 8.01846 13.9805 8.1129 13.9427 8.201C13.9049 8.2891 13.8495 8.36912 13.7797 8.43648L9.28019 12.7873C9.13937 12.9235 8.94839 13 8.74925 13C8.5501 13 8.35912 12.9235 8.2183 12.7873C8.07749 12.6512 7.99838 12.4665 7.99838 12.2739C7.99838 12.0814 8.07749 11.8967 8.2183 11.7605L11.4384 8.64822L2.74992 8.64822C2.55103 8.64822 2.36028 8.57182 2.21964 8.43583C2.07901 8.29984 2 8.1154 2 7.92308Z"
                    fill="white"
                  />
                </svg>
              </button>
              <div className="w-[1px] mx-2 h-[12px] bg-[#D2D2D7]" />
              <button className="py-2 px-4 rounded-[24px] bg-[#187FE7] text-white flex items-center gap-3">
                Refunded
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
