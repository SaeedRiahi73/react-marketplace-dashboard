import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const IconAngle_up: React.FC<typeIcon> = ({ typeIcon, className }) => {
  return typeIcon === typeIconEnum.Solid ? (
    <>
      <svg
        width="18"
        height="10"
        viewBox="0 0 18 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M7.99987 0.418433C8.55304 -0.139478 9.45139 -0.139478 10.0046 0.418433L17.0851 7.5597C17.6383 8.11761 17.6383 9.02365 17.0851 9.58157C16.532 10.1395 15.6336 10.1395 15.0804 9.58157L9 3.44901L2.91956 9.5771C2.36639 10.135 1.46805 10.135 0.914877 9.5771C0.361708 9.01919 0.361708 8.11314 0.914877 7.55523L7.99544 0.41397L7.99987 0.418433Z"
          fill="#292929"
        />
      </svg>
    </>
  ) : typeIcon === typeIconEnum.Reqular ? (
    <>
      <svg
        width="18"
        height="10"
        viewBox="0 0 18 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M8.45411 0.242314C8.75362 -0.0807712 9.24638 -0.0807712 9.54589 0.242314L17.2754 8.57999C17.5749 8.90308 17.5749 9.4346 17.2754 9.75769C16.9758 10.0808 16.4831 10.0808 16.1836 9.75769L9 2.00886L1.81643 9.75769C1.51691 10.0808 1.02415 10.0808 0.724638 9.75769C0.425121 9.4346 0.425121 8.90308 0.724638 8.57999L8.45411 0.242314Z"
          fill="#292929"
        />
      </svg>
    </>
  ) : null;
};

export default IconAngle_up;
