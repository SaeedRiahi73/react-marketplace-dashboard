import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const Iconcolumns_3: React.FC<typeIcon> = ({ typeIcon, className }) => {
  return typeIcon === typeIconEnum.Solid ? (
    <>
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M2.33341 0.166626C1.41414 0.166626 0.666748 0.914022 0.666748 1.83329V10.1666C0.666748 11.0859 1.41414 11.8333 2.33341 11.8333H15.6667C16.586 11.8333 17.3334 11.0859 17.3334 10.1666V1.83329C17.3334 0.914022 16.586 0.166626 15.6667 0.166626H2.33341ZM5.66675 1.83329V10.1666H2.33341V1.83329H5.66675ZM7.33342 1.83329H10.6667V10.1666H7.33342V1.83329ZM15.6667 1.83329V10.1666H12.3334V1.83329H15.6667Z" />
      </svg>
    </>
  ) : typeIcon === typeIconEnum.Reqular ? (
    <>
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M2.33341 0.166626C1.41414 0.166626 0.666748 0.914022 0.666748 1.83329V10.1666C0.666748 11.0859 1.41414 11.8333 2.33341 11.8333H15.6667C16.586 11.8333 17.3334 11.0859 17.3334 10.1666V1.83329C17.3334 0.914022 16.586 0.166626 15.6667 0.166626H2.33341ZM5.66675 1.83329V10.1666H2.33341V1.83329H5.66675ZM7.33342 1.83329H10.6667V10.1666H7.33342V1.83329ZM15.6667 1.83329V10.1666H12.3334V1.83329H15.6667Z" />
      </svg>
    </>
  ) : null;
};

export default Iconcolumns_3;
