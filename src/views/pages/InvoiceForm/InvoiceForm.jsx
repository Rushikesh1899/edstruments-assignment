import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
  Divider,
  IconButton
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDropzone } from "react-dropzone";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { Document, Page, pdfjs } from 'react-pdf';
import VendorDetails from '../vendorDetails/VendorDetails';
import InvoiceDetails from '../invoiceDetails/InvoiceDetails';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CreateNewInvoice() {
  const [errorMessage, setErrorMessage] = useState();
  const [file, setFile] = useState(null);
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file)
    const filesType = file.type;
    console.log(filesType);
    if (filesType !== "application/pdf") {
      setErrorMessage("Invalid file type. Please upload a .csv file.");
    } else {
      setFile(URL.createObjectURL(file))
      setErrorMessage(null)
    }
  };

  console.log(file);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
  });

  return (
    <Box sx={{ width: "100%", height: "calc(100vh - 20px)" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", height: "40px", background: "#FFFFFF", marginTop: "10px" }}>
        <IconButton sx={{ display: "flex", alignItems: "center", gap: "8px", borderRadius: "10px", width: "35%", justifyContent: "start" }}>
          <ArrowBackIcon sx={{ color: "#000000" }} />
          <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#000000" }}>
            Create New Invoice
          </Typography>
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", borderRadius: "10px", width: "75%", justifyContent: "start", height: "30px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
            sx={{
              height: "30px",
              minHeight: "30px",
              display: "flex",
              alignItems: "center",
              ".MuiTabs-root": {
                height: "40px",
                padding: "0px",
              },
              ".MuiTabs-list": {
                display: "flex",
                height: "30px",
                alignItems: "center"
              }
            }}
          >
            <Tab
              value="one"
              id="one"
              label="Vendor Details"
              sx={{ fontSize: "12px", fontWeight: 500 }}
              wrapped
            />
            <Tab value="two" sx={{ fontSize: "12px", fontWeight: 500 }} label="Invoice Details" />
            <Tab value="three" sx={{ fontSize: "12px", fontWeight: 500 }} label="Comments" />
          </Tabs>
        </Box>
      </Box>
      <Box sx={{
        marginTop: "10px", height: "90%", display: "flex", alignItems: "center", gap: "2px", flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }
      }}>
        <Box
          {...getRootProps()}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "40%",
            },
            border: "1.5px dashed rgb(129, 129, 129)",
            borderRadius: "6px",
            margin: "10px",
            background: "#FFFFFF",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", alignContent: "center", gap: "2px", flexDirection: "column" }}>
            <Typography sx={{ color: "#000000", fontSize: "16px", fontWeight: 600 }}>
              Upload your invoice
            </Typography>
            <Typography sx={{ color: "#000000", fontSize: "12px", fontWeight: 400 }}>
              To auto-populate fields and save time
            </Typography>
          </Box>
          <Box>
            <img src='/public/fileIcon.png' />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <input {...getInputProps()} />
            <Button
              variant="outlined"
              color='#B6BBBF'
              sx={{
                height: "32px",
                width: "120px",
                display: "flex",
                // justifyContent: "space-evenly",
                padding: "10px 10px",
                gap: "10px",
                background: "#FFFFFF",
                ":hover": { background: "#ffffff" },
              }}
              onClick={() => {
                open();
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Upload File
              </Typography>
              <VerticalAlignTopIcon sx={{ fontSize: "16px" }} />
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "2px"
              }}
            >
              <Typography sx={{ fontSize: "12px", color: "#3D96D9" }}>
                Click to upload
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#B7BBBF" }}>
                or Drag & Drop
              </Typography>
            </Box>
          </Box>
          {errorMessage && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
              <Typography
                sx={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {errorMessage}
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "10px",
            height: "100%",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
            },
          }}
        >
          <VendorDetails />
          <InvoiceDetails />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, mb: 4}}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  height: 36,
                  fontSize: "14px",
                  color: "#000",
                  borderColor: "#D0D5DD",
                  background: "#fff",
                  "&:hover": {
                    borderColor: "#A0A4AB",
                  },
                }}
              >
                Save as Draft
              </Button>

              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  height: 36,
                  fontSize: "14px",
                  background: "#1976d2",
                  "&:hover": { background: "#1565c0" },
                }}
              >
                Submit & New
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
