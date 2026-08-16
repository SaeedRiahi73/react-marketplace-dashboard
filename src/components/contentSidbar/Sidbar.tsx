import LogoSidbar from "./LogoSidbar";
import InfoUser from "./InfoUser";
import ContentSidbar from "./ContentSidbar";

const Sidbar: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col bg-white w-full">
        <LogoSidbar />
        <InfoUser />
        <ContentSidbar />
      </div>
    </>
  );
};

export default Sidbar;
