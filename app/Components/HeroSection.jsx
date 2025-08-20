import Image from "next/image";
function HeroSection() {
  return (
    <>
      <section className=" relative mx-auto w-full bg-[#F2F0F1] overflow-hidden pb-20 ">
        <div className=" max-w-7xl px-2 md:px-[168px]">
          {/* image on large screen  */}
          <div className="hidden md:block ">
            <Image
              src="/image/HeroImage-removebg.png"
              alt="Hero image"
              fill
              className=" object-contain"
              priority
            />
            <div className="absolute left-320 top-20">
              <Image
                src="/image/Vector.png"
                height={60}
                width={60}
                alt="Vector star"
              />
            </div>
            <div className="absolute left-200 top-64">
              <Image
                src="/image/smVector.png"
                height={40}
                width={40}
                alt="Vector Star"
              />
            </div>
          </div>

          {/* image on mobile  */}

          <div className="block md:hidden ">
            <Image
              src="/image/HeroImage-removebg.png"
              alt="Hero image"
              fill
              className=" object-contain"
              priority
            />
            <div className="absolute left-320 top-20">
              <Image
                src="/image/Vector.png"
                height={60}
                width={60}
                alt="Vector star"
              />
            </div>
            <div className="absolute left-200 top-64">
              <Image
                src="/image/smVector.png"
                height={40}
                width={40}
                alt="Vector Star"
              />
            </div>
          </div>

          <div className="relative flex items-start h-full  flex-col gap-10 ">
            <div className="max-w-xl  flex flex-col md:gap-8">
              <h1 className=" w-[350px] font-integral md:w-full font-extrabold text-4xl md:text-6xl leading-[1.2]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="w-[250px] md:w-full text-[16px] leading-5 font-normal font-satoshi text-black/60">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="py-4 font-satoshi px-6 md:px-12 w-full md:w-[210px] rounded-full bg-black text-white font-semibold">
                {" "}
                Shop Now{" "}
              </button>
            </div>

            <div className=" max-w-[650px] flex flex-wrap justify-between gap-2 md:gap-8">
              <div>
                <p className=" font-bold font-satoshi text-[40px]">200+</p>
                <p className="text-[16px] font-normal font-satoshi  text-black/60">
                  International Brands
                </p>
              </div>
              <div>
                <p className=" font-bold font-satoshi text-[40px]">2,000+</p>
                <p className="text-[16px] font-satoshi font-normal text-black/60">
                  High-Quality Products
                </p>
              </div>
              <div>
                <p className=" font-bold font-satoshi text-[40px]">30,000+</p>
                <p className="text-[16px] font-satoshi font-normal text-black/60">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
