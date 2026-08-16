import { typeIconEnum } from "../../enums/styleIconEnum";
import { typeIcon } from "../../interface/Iicons";

const Iconcheck: React.FC<typeIcon> = ({ typeIcon, className }) => {
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
        <path d="M21.5815 5.40594C22.1395 5.95273 22.1395 6.84072 21.5815 7.38751L10.1542 18.5858C9.59625 19.1325 8.6901 19.1325 8.13213 18.5858L2.41848 12.9866C1.86051 12.4398 1.86051 11.5519 2.41848 11.0051C2.97645 10.4583 3.8826 10.4583 4.44058 11.0051L9.14541 15.6112L19.5639 5.40594C20.1219 4.85915 21.028 4.85915 21.586 5.40594H21.5815Z" />
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
        <path d="M21.6853 5.31209C22.1049 5.73375 22.1049 6.41559 21.6853 6.83276L9.90225 18.6796C9.4827 19.1013 8.80429 19.1013 8.3892 18.6796L2.31466 12.579C1.89511 12.1573 1.89511 11.4755 2.31466 11.0583C2.73421 10.6412 3.41263 10.6367 3.82772 11.0583L9.13903 16.3964L20.1678 5.31209C20.5874 4.89043 21.2658 4.89043 21.6809 5.31209H21.6853Z" />
      </svg>
    </>
  ) : null;
};

export default Iconcheck;
