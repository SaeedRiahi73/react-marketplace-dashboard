import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const IconPlaceHolder: React.FC<typeIcon> = ({ typeIcon, className }) => {
  return typeIcon === typeIconEnum.Solid ? (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          opacity="0.4"
          d="M2 11.9944C2 6.4716 6.47715 1.99445 12 1.99445C17.5228 1.99445 22 6.4716 22 11.9944C22 17.5173 17.5228 21.9944 12 21.9944C6.47715 21.9944 2 17.5173 2 11.9944Z"
        />
      </svg>
    </>
  ) : typeIcon === typeIconEnum.Reqular ? (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          opacity="0.4"
          d="M2 11.9944C2 6.4716 6.47715 1.99445 12 1.99445C17.5228 1.99445 22 6.4716 22 11.9944C22 17.5173 17.5228 21.9944 12 21.9944C6.47715 21.9944 2 17.5173 2 11.9944Z"
        />
      </svg>
    </>
  ) : null;
};

export default IconPlaceHolder;
