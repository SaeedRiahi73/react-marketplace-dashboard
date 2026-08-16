import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";
import { Toaster } from "react-hot-toast";

function App() {
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
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
