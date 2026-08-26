import user from "../../assets/image/ss.jpg";
import { selectAuthSession } from "@/features/authSlice";
import { useSelector } from "react-redux";

const InfoUser: React.FC = () => {
  const session = useSelector(selectAuthSession);

  return (
    <div className="bg-selfit-600">
      <div className="flex flex-row items-center m-2 gap-2 p-2 bg-selfit-500 rounded-xl">
        <div>
          <img className="w-10 h-10 rounded-md" src={user} alt="" />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <h5 className="text-H5/Bold text-white">
            {session?.userName ?? "کاربر"}
          </h5>
          <h6 className="text-H6/Regular text-gray-200">
            {session?.role ?? ""}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
