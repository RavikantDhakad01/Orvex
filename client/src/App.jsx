import AppRoutes from "./routes/AppRoutes.jsx"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
          },
        }} />
      <AppRoutes />
    </>
  )
}

export default App