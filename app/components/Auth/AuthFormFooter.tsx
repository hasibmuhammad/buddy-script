import Link from "next/link";

interface AuthFormFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
}

const AuthFormFooter = ({ text, linkText, linkHref }: AuthFormFooterProps) => {
  return (
    <div className="text-center">
      <p className="text-sm text-primary7">
        {text}{" "}
        <Link
          href={linkHref}
          className="text-primary5 font-medium hover:underline"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AuthFormFooter;
