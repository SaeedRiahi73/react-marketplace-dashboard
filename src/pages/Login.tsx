import { Helmet } from "react-helmet";
import FormLogin from "../components/contentLogin/LoginForm";

const Login: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="relative flex flex-col items-center justify-center">
        <div className="fixed w-[400vw] h-[400vw] top-[60%] sm:top-[60%] -left-[150%] transform -translate-x1/2 rounded-full bg-[#F5F5F5]"></div>
        <FormLogin />
      </div>
    </>
  );
};

export default Login;
