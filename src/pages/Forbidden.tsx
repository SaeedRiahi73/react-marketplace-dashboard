import { Link } from "react-router-dom";

const Forbidden: React.FC = () => {
  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="text-7xl font-bold text-Error-500">403</p>
        <h1 className="mt-6 text-2xl font-bold text-lightGray-900">
          دسترسی غیرمجاز
        </h1>
        <p className="mt-3 text-H6/Regular text-lightGray-700">
          شما اجازه دسترسی به این صفحه را ندارید.
        </p>
        <Link
          to="/"
          replace
          className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-selfit-500 px-6 text-H6/Semibold text-selfit-900 hover:bg-selfit-600"
        >
          بازگشت به محصولات
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
