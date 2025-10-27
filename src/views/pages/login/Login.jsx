import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Button, Stack, TextField, Typography, Link as MuiLink } from "@mui/material";
 import { useFormik } from 'formik';
import Toaster from "../../components/Toaster";
import AuthCard from "../../../context/AuthCard";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openToast, setOpenToast] = useState(false);

  const formik = useFormik({
     initialValues: {
        email: '',
        password: '',
     },
     onSubmit: async (values) => {
        console.log(values)
        const success = await login(values);
        console.log(success)
        if (success) {
        setOpenToast(true)
        setTimeout(() => navigate("/invoiceForm"), 1000);
        } else {  
        console.log("i am here")  
        setError("Invalid email or password");
        }
     },
   });

  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <>
        <AuthCard title="Login">
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
            <TextField
                label="Email"
                id="email"
                name="email"
                type="email"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.email}
                required
            />
            <TextField
                label="Password"
                id="password"
                name="password"
                type="password"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.password}
                required
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                py: 1.2,
                borderRadius: 2,
                fontWeight: "bold",
                background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
                }}
            >
                Login
            </Button>

            <Typography variant="body2" textAlign="center">
                Don’t have an account?{" "}
                <MuiLink component={Link} to="/signup" underline="hover">
                Signup
                </MuiLink>
            </Typography>
            </Stack>
        </form>
        </AuthCard>
        <Toaster
            open={openToast}
            message="Login successful"
            isSave="success"
            onClose={() => setOpenToast(false)}
        />
    </>
  );
};

export default Login;