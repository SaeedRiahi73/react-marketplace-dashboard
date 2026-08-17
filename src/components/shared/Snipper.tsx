import { ISpinnerProps } from "@/interface/IProps";

const Spinner: React.FC<ISpinnerProps> = ({ text, overlay = false }) => {
  const spinnerContent = (
    <div className={`${overlay ? "p-4" : "relative my-36 p-4 mx-auto"} z-10 flex flex-col items-center bg-white shadow-lg rounded-2xl text-center`}>
      <div className="flex flex-col justify-center items-center mt-2 gap-3">
        <div>
          <div className="loader"></div>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <h4 className="text-H4/Bold text-black">در حال بررسی اطلاعات</h4>
          <h6 className="text-H6/Regular text-lightGray-800">{text}</h6>
        </div>
      </div>
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
};

export default Spinner;
