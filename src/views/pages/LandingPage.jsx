import { Suspense } from "react";
import { Box } from "@mui/material";
import { MainRoutes } from "../../../mainRoutes";

const LandingPage = () => {

    return (
        <Box sx={{ width: "100%" }}>
          <Suspense>
             <MainRoutes />
          </Suspense>
        </Box>
    )
}

export default LandingPage;