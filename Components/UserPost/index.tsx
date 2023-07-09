import React from "react";
import AvatarSmall from "../TransOverview/AvatarSmall";
import PostContent from "./PostContent";
import TransNameAction from "./TransNameAction";
import UserPost from "./UserPost";
import { UserPostWrapper } from "./UserPostWrapper";

export default function UserPostRoot() {
  return (
    <UserPostWrapper>
      <UserPost />
    </UserPostWrapper>
  );
}

export function UserPostWithoutLink() {
  return (
    <UserPostWrapper>
      <div className="flex gap-3">
        <AvatarSmall name="Leslie Alexander" />
        <div className="flex flex-col gap-3">
          <TransNameAction
            actionVerb="placed an"
            date="10h"
            name="Leslie Alexander"
            orderLink="Order"
          />
          <PostContent url={false} transName="You have a new order #77842372" />
        </div>
      </div>
    </UserPostWrapper>
  );
}

export function DisputePost() {
  return (
    <UserPostWrapper>
      <div className="flex gap-3">
        <AvatarSmall name="Leslie Alexander" />
        <div className="flex flex-col gap-3">
          <TransNameAction
            actionVerb="disputed an"
            date="10h"
            name="Leslie Alexander"
            orderLink="Order"
          />
          <PostContent
            url={false}
            transName="You have a new dispute #77842372 for Order #77842372"
            disputeDetails={
              <React.Fragment>
                <p className="text-[15px] font-[500] leading-[150%] text-[#1D1D1F]">
                  <b className="font-[600]">Received: </b>
                  <span>04/25/2022</span>
                </p>
                <p className="text-[15px] font-[500] leading-[150%] text-[#1D1D1F]">
                  <b className="font-[600]">Initiated: </b>
                  <span>04/25/2022</span>
                </p>
                <p className="text-[15px] font-[500] leading-[150%] text-[#1D1D1F]">
                  <b className="font-[600]">Reason: </b>
                  <span>Merchandise / Services not received. #31</span>
                </p>
                <p className="text-[15px] font-[500] leading-[150%] text-[#1D1D1F]">
                  <b className="font-[600]">Institution: </b>
                  <span>Bank of America. #556783</span>
                </p>
              </React.Fragment>
            }
            secondaryText={false}
          />
        </div>
      </div>
    </UserPostWrapper>
  );
}
