import { Box } from "@mui/material"
import { AuthProvider } from "./context/AuthContext"
import LandingPage from "./views/pages/LandingPage"

function App() {

  return (
    <Box>
      <AuthProvider>
        <LandingPage />
      </AuthProvider>
    </Box>
  )
}

export default App
