import Image from "next/image";

const Shapes = () => {
  return (
    <>
      {/* Decorative Shapes */}
      <div className="hidden md:block absolute top-0 left-0 w-[150px] z-0">
        <Image
          src="/images/shape1.svg"
          alt="shape"
          width={150}
          height={150}
          className="w-full h-auto"
        />
      </div>
      <div className="hidden md:block absolute top-0 right-5 w-[450px] 2xl:w-[600px] z-0">
        <Image
          src="/images/shape2.svg"
          alt="shape"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <div className="hidden md:block absolute bottom-0 right-0 w-[494px] xl:right-0 2xl:right-[226px] 2xl:w-[400px] min-[1700px]:right-[327px] z-0">
        <Image
          src="/images/shape3.svg"
          alt="shape"
          width={494}
          height={494}
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default Shapes;
