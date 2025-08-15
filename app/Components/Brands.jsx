import Image from "next/image";
function Brands() {
  return (
    <>
      <div className=" bg-black py-6">
        <div className="max-w-6xl mx-auto flex justify-around items-center gap-8 flex-wrap">
          <Image
            src="/image/versache.png"
            width={150}
            height={30}
            alt="versache"
          />
          <Image src="/image/zara.png" width={150} height={30} alt="zara" />
          <Image src="/image/gucci.png" width={150} height={30} alt="gucci" />
          <Image src="/image/prada.png" width={150} height={30} alt="prada" />
          <Image
            src="/image/ck.png"
            width={150}
            height={30}
            alt="calvin klein"
          />
        </div>
      </div>
    </>
  );
}

export default Brands;
