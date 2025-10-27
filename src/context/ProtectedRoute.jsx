import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate =useNavigate()
    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("users"))
        const findVal = userData?.findIndex((val) => val?.email === user?.email)
        if(findVal === -1) {
            navigate('/')
            localStorage.removeItem("currentUser")
        }
    },[user])

    return <>{children}</>
};

export default ProtectedRoute;