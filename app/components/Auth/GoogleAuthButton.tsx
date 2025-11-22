import Image from "next/image";

interface GoogleAuthButtonProps {
  text: string;
  onGoogleAuth: () => void;
}

const GoogleAuthButton = ({ text, onGoogleAuth }: GoogleAuthButtonProps) => {
  return (
    <button
      type="button"
      onClick={onGoogleAuth}
      className="w-full bg-white border border-border2 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-10"
    >
      <Image src="/images/google.svg" alt="Google" width={20} height={20} />
      <span className="text-primary font-medium">{text}</span>
    </button>
  );
};

export default GoogleAuthButton;
