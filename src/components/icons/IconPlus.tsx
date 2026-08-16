import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const IconPlus: React.FC<typeIcon> = ({ typeIcon, className }) => {

  if (typeIcon === typeIconEnum.Solid) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M9.23105 1.22647C9.23105 0.545683 8.68103 -0.0043335 8.00024 -0.0043335C7.31945 -0.0043335 6.76944 0.545683 6.76944 1.22647V6.7651H1.23081C0.550017 6.7651 0 7.31512 0 7.99591C0 8.6767 0.550017 9.22672 1.23081 9.22672H6.76944V14.7653C6.76944 15.4461 7.31945 15.9962 8.00024 15.9962C8.68103 15.9962 9.23105 15.4461 9.23105 14.7653V9.22672H14.7697C15.4505 9.22672 16.0005 8.6767 16.0005 7.99591C16.0005 7.31512 15.4505 6.7651 14.7697 6.7651H9.23105V1.22647Z" />
      </svg>
    )
  }
  else if (typeIcon === typeIconEnum.Reqular) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M8.92308 0.918988C8.92308 0.407449 8.51154 -0.00408936 8 -0.00408936C7.48846 -0.00408936 7.07692 0.407449 7.07692 0.918988V7.07283H0.923077C0.411538 7.07283 0 7.48437 0 7.99591C0 8.50745 0.411538 8.91899 0.923077 8.91899H7.07692V15.0728C7.07692 15.5844 7.48846 15.9959 8 15.9959C8.51154 15.9959 8.92308 15.5844 8.92308 15.0728V8.91899H15.0769C15.5885 8.91899 16 8.50745 16 7.99591C16 7.48437 15.5885 7.07283 15.0769 7.07283H8.92308V0.918988Z" />
      </svg>
    )
  }
  return null;
};

export default IconPlus;
