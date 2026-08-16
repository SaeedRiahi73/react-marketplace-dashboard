import { ISpinnerProps } from "@/interface/IProps";

const Spinner: React.FC<ISpinnerProps> = ({ text }) => {
  return (
    <div className="relative my-36 p-4 mx-auto z-10 flex flex-col items-center bg-white shadow-lg rounded-2xl text-center">
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
};

export default Spinner;
