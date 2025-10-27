import React from "react";
import { Box, Typography, TextField, MenuItem, Link, Stack, Divider } from "@mui/material";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function VendorDetails() {
  return (
    <Box
      sx={{
        fontFamily: "Jost, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#E9F2FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BusinessOutlinedIcon sx={{ color: "#1976d2", fontSize: "20px" }} />
        </Box>
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          Vendor Details
        </Typography>
      </Stack>
      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
        Vendor Information
      </Typography>
      <Box>
        <Typography
          sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
          component="label"
        >
          Vendor <span style={{ color: "red" }}>*</span>
        </Typography>

        <TextField
          select
          fullWidth
          defaultValue="a1"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
            borderRadius: "6px",
            height: 32,
            fontFamily: "Jost, sans-serif",
            backgroundColor: "#fff",
            fontSize: "12px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C9CDD2",
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
            borderWidth: "2px",
            },
            "& .MuiInputBase-input::placeholder": {
            color: "#A0A4A8",
            opacity: 1,
            fontSize: "14px",
            },
        }}
        >
          <MenuItem value="a1">A - 1 Exterminators</MenuItem>
          <MenuItem value="b2">B - 2 Vendors</MenuItem>
          <MenuItem value="b2">A - 3 Supplier</MenuItem>
        </TextField>
        <Typography
          sx={{ fontSize: "12px", color: "#84878A", mt: 1 }}
        >
          550 Main St., Lynn
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Link
          component="button"
          underline="hover"
          sx={{
            display:"flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
         <KeyboardArrowDownIcon sx={{fontSize: "18px"}} />
         <Typography sx={{fontSize: "14px", color: "#1976d2",fontWeight: 500}}>
            View Vendor Details
         </Typography>
        </Link>
      </Box>
    </Box>
  );
}