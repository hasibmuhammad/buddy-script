import Image from "next/image";
import RegistrationForm from "../components/Form/RegistrationForm";
import Shapes from "../components/Shapes/Shapes";

const Registration = () => {
  return (
    <section className="relative bg-bg1 min-h-screen overflow-hidden flex items-center py-10 lg:py-0">
      {/* Decorative Shapes */}
      <Shapes />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center">
          {/* Left Side - Image */}
          <div className="w-full lg:w-8/12 xl:w-8/12 mb-8 lg:mb-0">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[600px]">
                <Image
                  src="/images/registration.png"
                  alt="Registration"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="py-[100px] w-full lg:w-4/12 xl:w-4/12">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
