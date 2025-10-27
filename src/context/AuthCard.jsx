import { Card, CardContent, Typography, Box } from "@mui/material";

const AuthCard = ({ title, children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:  "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
      }}
    >
      <Card
        sx={{
          width: 400,
          borderRadius: 4,
          boxShadow: 6,
          backdropFilter: "blur(8px)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            sx={{fontWeight: 600, fontSize: "1.5rem"}}
            textAlign="center"
            gutterBottom
          >
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuthCard;