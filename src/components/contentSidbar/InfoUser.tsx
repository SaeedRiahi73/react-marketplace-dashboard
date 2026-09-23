import useCurrentUserIdentity from "@/hooks/useCurrentUserIdentity";
import { handleImageError } from "@/utility";

const InfoUser: React.FC = () => {
  const { userName, roleLabel, imageUrl } = useCurrentUserIdentity();

  return (
    <div className="bg-selfit-600">
      <div className="flex flex-row items-center m-2 gap-2 p-2 bg-selfit-500 rounded-xl">
        <div>
          <img
            className="h-10 w-10 rounded-md object-cover"
            src={imageUrl}
            alt={`تصویر ${userName}`}
            onError={handleImageError}
          />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <h5 className="text-H5/Bold text-white">
            {userName}
          </h5>
          <h6 className="text-H6/Regular text-gray-200">
            {roleLabel}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
