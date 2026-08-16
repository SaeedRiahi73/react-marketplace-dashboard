import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const IconAngle_Down: React.FC<typeIcon> = ({ typeIcon, className }) => {
  return typeIcon === typeIconEnum.Reqular ? (
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
          d="M12.7886 16.6612C12.3543 17.1129 11.6521 17.1129 11.2224 16.6612L3.82571 8.97261C3.39143 8.5209 3.39143 7.79049 3.82571 7.34359C4.26 6.89668 4.96224 6.89188 5.3919 7.34359L11.9986 14.2153L18.6098 7.33878C19.0441 6.88707 19.7464 6.88707 20.176 7.33878C20.6057 7.79049 20.6103 8.5209 20.176 8.9678L12.7886 16.6612Z"
          fill="#292929"
        />
      </svg>
    </>
  ) : typeIcon === typeIconEnum.Solid ? (
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
          d="M10.9999 16.5816C11.553 17.1395 12.4514 17.1395 13.0046 16.5816L20.0851 9.4403C20.6383 8.88239 20.6383 7.97634 20.0851 7.41843C19.532 6.86052 18.6336 6.86052 18.0804 7.41843L12 13.551L5.91956 7.4229C5.36639 6.86499 4.46805 6.86499 3.91488 7.4229C3.36171 7.98081 3.36171 8.88686 3.91488 9.44477L10.9954 16.586L10.9999 16.5816Z"
          fill="#292929"
        />
      </svg>
    </>
  ) : null;
};

export default IconAngle_Down;
