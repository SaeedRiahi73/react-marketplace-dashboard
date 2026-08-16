import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const IconAngle_right: React.FC<typeIcon> = ({ typeIcon, className }) => {
  return typeIcon === typeIconEnum.Solid ? (
    <>
      <svg
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M9.58157 7.99987C10.1395 8.55304 10.1395 9.45139 9.58157 10.0046L2.4403 17.0851C1.88239 17.6383 0.976345 17.6383 0.418433 17.0851C-0.139478 16.532 -0.139478 15.6336 0.418433 15.0804L6.55099 9L0.422897 2.91956C-0.135015 2.36639 -0.135015 1.46805 0.422897 0.914877C0.980808 0.361708 1.88686 0.361708 2.44477 0.914877L9.58603 7.99544L9.58157 7.99987Z" />
      </svg>
    </>
  ) : typeIcon === typeIconEnum.Reqular ? (
    <>
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M7.17178 5.63611C7.38717 5.83579 7.38717 6.16429 7.17178 6.36397L1.61333 11.5169C1.39794 11.7166 1.04359 11.7166 0.828199 11.5169C0.612809 11.3173 0.612809 10.9888 0.828199 10.7891L5.99408 6.00004L0.828199 1.21099C0.612809 1.01131 0.612809 0.68281 0.828199 0.483132C1.04359 0.283455 1.39794 0.283455 1.61333 0.483132L7.17178 5.63611Z" />
      </svg>
    </>
  ) : null;
};

export default IconAngle_right;
