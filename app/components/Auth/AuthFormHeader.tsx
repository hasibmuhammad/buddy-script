import Image from "next/image";

interface AuthFormHeaderProps {
  subtitle: string;
  title: string;
}

const AuthFormHeader = ({ subtitle, title }: AuthFormHeaderProps) => {
  return (
    <>
      {/* Logo */}
      <div className="mb-7 flex justify-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={150}
          height={40}
          className="h-10 w-auto"
        />
      </div>

      {/* Welcome Text */}
      <p className="text-primary7 text-sm mb-2 text-center">{subtitle}</p>
      <h4 className="text-2xl lg:text-3xl font-semibold text-primary mb-12 text-center">
        {title}
      </h4>
    </>
  );
};

export default AuthFormHeader;
