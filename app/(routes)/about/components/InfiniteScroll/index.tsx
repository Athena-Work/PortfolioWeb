// Icons
import StarIcon from "@/public/icons/star";
import React from "react";

export default function InfiniteScroll({
  texts,
  toRight = false,
}: {
  texts: string[];
  toRight?: boolean;
}) {
  return (
    <div dir={toRight ? "rtl" : "ltr"} className='w-full flex overflow-hidden'>
      {/* First Repeat */}
      <div
        className={`flex items-center gap-3 pr-3 ${
          toRight
            ? "animate-infinite-scroll-right"
            : "animate-infinite-scroll-left"
        }`}
      >
        {texts.map((text, index) => {
          return (
            <React.Fragment key={index}>
              <div className='w-max py-2 px-4 bg-secondary200 rounded-lg'>
                <span className='text-white'>{text}</span>
              </div>
              <StarIcon size={28} />
            </React.Fragment>
          );
        })}
      </div>

      {/* Second Repeat */}
      <div
        className={`flex items-center gap-3 pr-3 ${
          toRight
            ? "animate-infinite-scroll-right"
            : "animate-infinite-scroll-left"
        }`}
      >
        {texts.map((text, index) => {
          return (
            <React.Fragment key={index}>
              <div className='w-max py-2 px-4 bg-secondary200 rounded-lg'>
                <span className='text-white'>{text}</span>
              </div>
              <StarIcon size={28} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
