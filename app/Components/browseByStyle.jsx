import React from "react";
import Image from "next/image";

function BrowseByStyle() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#F0F0F0] w-full max-w-[1240px] h-fit rounded-2xl p-10 flex flex-col items-center ">
          <h1 className="font-bold text-[32px] lg:text-[48px] text-center mb-6">
            BROWSE BY dress STYLE
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[repeat(5,1fr)] auto-rows-fr gap-0 w-full h-full">
            {/* First Cell */}
            <div className="relative bg-white lg:col-start-1 lg:col-end-3 ">
              <Image
                src="/image/casual.png"
                alt="Casual"
                width={350}
                height={180}
                className="object-cover rounded-2xl w-full h-auto"
                priority
              />
              <div className="absolute inset-0 flex justify-start items-start p-4 bg-black/30">
                <p className="text-black text-[24px] lg:text-[36px] font-bold">
                  Casual
                </p>
              </div>
            </div>

            {/* Second Cell */}
            <div className="relative bg-white lg:col-start-3 lg:col-end-6 ">
              <Image
                src="/image/Formal.png"
                alt="Formal"
                height={180}
                width={600}
                className="object-cover rounded-2xl w-full h-auto "
                priority
              />
              <div className="absolute  inset-0 flex justify-start items-start p-4 bg-black/30">
                <p className="text-black text-[24px] font-bold lg:text-[36px] ">
                  Formal
                </p>
              </div>
            </div>

            {/* Third Cell */}
            <div className="relative bg-white lg:col-start-1 lg:col-end-4">
              <Image
                src="/image/Party.png"
                alt="Party"
                height={180}
                width={600}
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 flex justify-start items-start p-4 bg-black/30">
                <p className="text-black text-[24px] font-bold lg:text-[36px]">
                  Party
                </p>
              </div>
            </div>

            {/* Fourth Cell */}
            <div className="relative bg-white lg:col-start-4 lg:col-end-6 ">
              <Image
                src="/image/Gym.png"
                alt="Gym"
                height={180}
                width={350}
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 flex justify-start items-start p-4 bg-black/30">
                <p className="text-black text-[24px] lg:text-[36px] font-bold">
                  Gym
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowseByStyle;
