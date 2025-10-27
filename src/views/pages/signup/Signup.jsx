import { useEffect, useState } from "react";
import { TextField, Button, Typography, Stack, Link as MuiLink } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import AuthCard from "../../../context/AuthCard";
import { useFormik } from "formik";
import Toaster from "../../components/Toaster";

const Signup = () => {
  const { signup } = useAuth();
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
       onSubmit: values => {
          console.log(values)
          const success = signup(values);
          if (success) {
            setOpenToast(true)
            setTimeout(() => navigate("/"), 1000);
          }else {
            setError("User already exists!");
          }
       },
    });

    useEffect(() => {
        document.body.style.margin = "0";
      }, []);

  return (
    <>
        <AuthCard title="Signup">
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
            <TextField
                label="Email"
                id="email"
                name="email"
                type="email"
                fullWidth
                variant="outlined"
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
                variant="outlined"
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
                Signup
            </Button>

            <Typography variant="body2" textAlign="center">
                Already have an account?{" "}
                <MuiLink component={Link} to="/" underline="hover">
                Login
                </MuiLink>
            </Typography>
            </Stack>
        </form>
        </AuthCard>
        <Toaster
                open={openToast}
                message="Signup successful"
                isSave="success"
                onClose={() => setOpenToast(false)}
            />
    </>
  );
};

export default Signup;