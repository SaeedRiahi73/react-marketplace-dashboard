import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const IconMinus: React.FC<typeIcon> = ({ typeIcon, className }) => {
  return typeIcon === typeIconEnum.Solid ? (
    <>
      <svg
        width="21"
        height="4"
        viewBox="0 0 21 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M20.25 1.99567C20.25 2.82535 19.5797 3.49567 18.75 3.49567H2.25C1.42031 3.49567 0.75 2.82535 0.75 1.99567C0.75 1.16598 1.42031 0.495667 2.25 0.495667H18.75C19.5797 0.495667 20.25 1.16598 20.25 1.99567Z" />
      </svg>
    </>
  ) : typeIcon === typeIconEnum.Reqular ? (
    <>
      <svg
        width="20"
        height="2"
        viewBox="0 0 20 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M20 0.995667C20 1.54983 19.4856 1.99567 18.8462 1.99567H1.15385C0.514423 1.99567 0 1.54983 0 0.995667C0 0.4415 0.514423 -0.0043335 1.15385 -0.0043335H18.8462C19.4856 -0.0043335 20 0.4415 20 0.995667Z" />
      </svg>
    </>
  ) : null;
};

export default IconMinus;
