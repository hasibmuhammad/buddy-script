interface PrimaryButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const PrimaryButton = ({
  text,
  type = "submit",
  onClick,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-primary5 text-white font-medium py-3.5 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg mb-16"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
