import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const IconAngle_Left: React.FC<typeIcon> = ({ typeIcon, className }) => {
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
        <path d="M7.41843 10.9999C6.86052 11.553 6.86052 12.4514 7.41843 13.0046L14.5597 20.0851C15.1176 20.6383 16.0237 20.6383 16.5816 20.0851C17.1395 19.532 17.1395 18.6336 16.5816 18.0804L10.449 12L16.5771 5.91956C17.135 5.36639 17.135 4.46805 16.5771 3.91488C16.0192 3.36171 15.1131 3.36171 14.5552 3.91488L7.41397 10.9954L7.41843 10.9999Z" />
      </svg>
    </>
  ) : typeIcon === typeIconEnum.Reqular ? (
    <>
      <svg
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M0.242314 9.54589C-0.0807712 9.24638 -0.0807712 8.75362 0.242314 8.45411L8.57999 0.724638C8.90307 0.425121 9.4346 0.425121 9.75769 0.724638C10.0808 1.02415 10.0808 1.51691 9.75769 1.81643L2.00886 9L9.75769 16.1836C10.0808 16.4831 10.0808 16.9758 9.75769 17.2754C9.4346 17.5749 8.90307 17.5749 8.57999 17.2754L0.242314 9.54589Z" />
      </svg>
    </>
  ) : null;
};

export default IconAngle_Left;
