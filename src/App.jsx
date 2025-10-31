import AppRouter from "./routes/AppRouter"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"

function App() {
  return (
 <>
 <AppRouter />
 <ToastContainer position="top-center" />
 </>
  )
}

export default App