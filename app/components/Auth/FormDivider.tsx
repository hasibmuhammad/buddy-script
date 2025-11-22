const FormDivider = () => {
  return (
    <div className="relative mb-10">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border2"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-4 text-primary7 text-sm">Or</span>
      </div>
    </div>
  );
};

export default FormDivider;
