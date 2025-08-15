import Image from "next/image";
function HeroSection() {
  return (
    <>
      <section className=" relative w-full bg-[#F2F0F1] overflow-hidden ">
        <div className="hidden md:block">
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

        <div className="relative flex items-center h-full px-2 md:px-16">
          <div className="max-w-xl  flex flex-col gap-4 md:gap-8">
            <h1 className=" w-[350px] md:w-full font-extrabold text-4xl md:text-6xl leading-[1.2]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="w-[250px] md:w-full text-[16px] leading-5 font-normal text-black/60">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="py-4 px-6 md:px-12 w-full md:w-[210px] rounded-full bg-black text-white font-semibold">
              {" "}
              Shop Now{" "}
            </button>
            <div className="flex flex-wrap justify-center gap-2 md:gap-8">
              <div>
                <p className=" font-bold text-[40px]">200+</p>
                <p className="text-[16px] font-normal text-black/60">
                  International Brands
                </p>
              </div>
              <div>
                <p className=" font-bold text-[40px]">2,000+</p>
                <p className="text-[16px] font-normal text-black/60">
                  High-Quality Products
                </p>
              </div>
              <div>
                <p className=" font-bold text-[40px]">30,000+</p>
                <p className="text-[16px] font-normal text-black/60">
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
