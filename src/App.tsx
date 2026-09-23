import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";
import { Toaster } from "react-hot-toast";
import Spinner from "@/components/shared/Snipper";
import useAuthInitializer from "@/hooks/useAuthInitializer";
import useToastNotification from "@/hooks/useToastNotification";

function App() {
  const isAuthInitialized = useAuthInitializer();
  useToastNotification();

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 5000,
            position: "bottom-center",
            style: {
              background: "#22A958",
              borderRadius: "999px",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#22A958",
            },
          },
          error: {
            duration: 5000,
            position: "bottom-center",
            style: {
              background: "#B4001B",
              borderRadius: "999px",
              color: "#fff",
            },
          },
        }}
      />
      {isAuthInitialized ? (
        <RouterProvider router={Router} />
      ) : (
        <Spinner text="لطفاً صبر کنید..." overlay />
      )}
    </>
  );
}

export default App;
