import { Navigate, Route } from "react-router-dom"
import Register from "./pages/Login"


function App() {


  return (
   
      <Routes>
        <Route path="/" element ={<Navigate to="/login" replace />} /> 
        <Route path="/register" element ={ <Register />} /> 
        <Route path="/login" element ={ <Login />} /> 
        <Route element={<ProtectedRoute/>}>
        <Route path="/courses" element={<Dashboard />} />
      </Route>
      </Routes>
  )
}

export default App
