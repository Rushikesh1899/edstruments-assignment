
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { Box, Button, IconButton, InputAdornment, MenuItem, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const InvoiceDetails = () => {
    return (
        <Box sx={{
            fontFamily: "Jost, sans-serif",
            display: "flex",
            flexDirection: "column",
            gap: 2,
        }}>
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
                    <BusinessOutlinedIcon sx={{ color: "#1976d2", fontSize: 20 }} />
                </Box>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                    Invoice Details
                </Typography>
            </Stack>
            <Box>
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    General Information
                </Typography>
            </Box>
            <Box>
                <Typography
                    sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                    component="label"
                >
                    Purchase Order Number <span style={{ color: "red" }}>*</span>
                </Typography>

                <TextField
                    select
                    defaultValue={""}
                    fullWidth
                    size="small"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "6px",
                            height: 32,
                            fontFamily: "Jost, sans-serif",
                            backgroundColor: "#fff",
                            fontSize: "12px"
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
                    <MenuItem value="b2">A - 2 Vendors</MenuItem>
                    <MenuItem value="b2">A - 3 Supplier</MenuItem>
                </TextField>
            </Box>

            <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Invoice Details
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                        component="label"
                    >
                        Invoice Number <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "6px",
                                height: 32,
                                fontFamily: "Jost, sans-serif",
                                backgroundColor: "#fff",
                                fontSize: "12px"
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
                        <MenuItem value="a1">983589</MenuItem>
                        <MenuItem value="b2">393949</MenuItem>
                        <MenuItem value="b2">839332</MenuItem>
                        <MenuItem value="b2">453523</MenuItem>
                        <MenuItem value="b2">675767</MenuItem>
                    </TextField>
                </Box>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, color: "#84878A" }}
                        component="label"
                    >
                        Invoice Date <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        sx: {
                                            ".MuiPickersOutlinedInput-root": {
                                                background: "#FFF",
                                                height: 32,
                                                overflow: "hidden",
                                                fontSize: "12px"
                                            },
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "8px",
                                                backgroundColor: "#fff",
                                                fontFamily: "Jost, sans-serif",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#C9CDD2",
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#1976d2",
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#1976d2",
                                                borderWidth: "1.8px",
                                            },
                                        },
                                        InputProps: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CalendarTodayIcon sx={{ fontSize: "18px" }} />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <ArrowDropDownIcon />
                                                </InputAdornment>
                                            ),
                                        },
                                    },
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                        component="label"
                    >
                        Total Amount <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="0.00"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Box
                                        sx={{
                                            background: "#F5F6FA",
                                            borderRight: "1px solid #E0E0E0",
                                            height: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            px: 1.2,
                                            borderTopLeftRadius: "8px",
                                            borderBottomLeftRadius: "8px",
                                            fontSize: "14px",
                                        }}
                                    >
                                        $
                                    </Box>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Box
                                        sx={{
                                            height: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            px: 1.2,
                                            fontSize: "12px",
                                        }}
                                    >
                                        USD
                                    </Box>
                                </InputAdornment>
                            ),
                            sx: {
                                background: "#fff",
                                height: "32px",
                                padding: 0,
                                "& input": {
                                    padding: "0 8px",
                                    fontSize: "14px",
                                },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#D2D6DB",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#A0A4AB",
                            },
                        }}
                    />
                </Box>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                        component="label"
                    >
                        Payment Terms <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "6px",
                                height: 32,
                                fontFamily: "Jost, sans-serif",
                                backgroundColor: "#fff",
                                fontSize: "12px"
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
                        <MenuItem value="a1">Online</MenuItem>
                        <MenuItem value="b2">Cash</MenuItem>
                        <MenuItem value="b2">Card</MenuItem>
                    </TextField>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                        component="label"
                    >
                        Invoice Due Date <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        sx: {
                                            ".MuiPickersOutlinedInput-root": {
                                                background: "#FFF",
                                                height: 32,
                                                overflow: "hidden",
                                                fontSize: "12px"
                                            },
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "8px",
                                                backgroundColor: "#fff",
                                                fontFamily: "Jost, sans-serif",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#C9CDD2",
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#1976d2",
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#1976d2",
                                                borderWidth: "1.8px",
                                            },
                                        },
                                        InputProps: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CalendarTodayIcon sx={{ fontSize: "18px" }} />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <ArrowDropDownIcon />
                                                </InputAdornment>
                                            ),
                                        },
                                    },
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                        component="label"
                    >
                        GL Post Date <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        sx: {
                                            ".MuiPickersOutlinedInput-root": {
                                                background: "#FFF",
                                                height: 32,
                                                overflow: "hidden",
                                                fontSize: "12px"
                                            },
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "8px",
                                                backgroundColor: "#fff",
                                                fontFamily: "Jost, sans-serif",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#C9CDD2",
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#1976d2",
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#1976d2",
                                                borderWidth: "1.8px",
                                            },
                                        },
                                        InputProps: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CalendarTodayIcon sx={{ fontSize: "18px" }} />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <ArrowDropDownIcon />
                                                </InputAdornment>
                                            ),
                                        },
                                    },
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                    component="label"
                >
                    Invoice Description <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                    fullWidth
                    size="small"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "6px",
                            height: 32,
                            fontFamily: "Jost, sans-serif",
                            backgroundColor: "#fff",
                            fontSize: "12px"
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
                />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    Expence Details
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ display: "flex", gap: 0.5, fontSize: "14px" }}>
                        <span style={{ color: "#000" }}>$ 0.00</span>
                        <span style={{ color: "#333" }}>/</span>
                        <span style={{ color: "#007AFF" }}> $ 0.00</span>
                    </Box>
                    <ToggleButtonGroup
                        exclusive
                        sx={{
                            background: "#F1F3F5",
                            borderRadius: "20px",
                            height: 28,
                            "& .MuiToggleButtonGroup-grouped": {
                                padding: "2px 10px",
                                border: "none",
                                borderRadius: "20px !important",
                                fontSize: "13px",
                                fontWeight: 500,
                                minWidth: 40,
                            },
                            "& .Mui-selected": {
                                background: "#1976d2 !important",
                                color: "#fff !important",
                            },
                        }}
                    >
                        <ToggleButton value="$">$</ToggleButton>
                        <ToggleButton value="%">%</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                        component="label"
                    >
                        Line Amount <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="0.00"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Box
                                        sx={{
                                            background: "#F5F6FA",
                                            borderRight: "1px solid #E0E0E0",
                                            height: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            px: 1.2,
                                            borderTopLeftRadius: "8px",
                                            borderBottomLeftRadius: "8px",
                                            fontSize: "14px",
                                        }}
                                    >
                                        $
                                    </Box>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Box
                                        sx={{
                                            height: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            px: 1.2,
                                            fontSize: "12px",
                                        }}
                                    >
                                        USD
                                    </Box>
                                </InputAdornment>
                            ),
                            sx: {
                                background: "#fff",
                                height: "32px",
                                padding: 0,
                                "& input": {
                                    padding: "0 8px",
                                    fontSize: "14px",
                                },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#D2D6DB",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#A0A4AB",
                            },
                        }}
                    />
                </Box>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, color: "#84878A" }}
                        component="label"
                    >
                        Department <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        select
                        fullWidth
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
                    </TextField>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                        component="label"
                    >
                        Amount <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "6px",
                                height: 32,
                                fontFamily: "Jost, sans-serif",
                                backgroundColor: "#fff",
                                fontSize: "12px"
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
                    </TextField>
                </Box>
                <Box sx={{ width: "45%" }}>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 500, color: "#84878A" }}
                        component="label"
                    >
                        Location <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "6px",
                                height: 32,
                                fontFamily: "Jost, sans-serif",
                                backgroundColor: "#fff",
                                fontSize: "12px"
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
                    </TextField>
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{ fontSize: "12px", fontWeight: 500, mb: 0.5, color: "#84878A" }}
                    component="label"
                >
                    Description <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                    fullWidth
                    size="small"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "6px",
                            height: 32,
                            fontFamily: "Jost, sans-serif",
                            backgroundColor: "#fff",
                            fontSize: "12px"
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
                />
            </Box>

            <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "end" }}>
                <Button
                    variant="outlined"
                    sx={{
                        textTransform: "none",
                        borderRadius: "8px",
                        width: "200px",
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
                    + Add Expence Coding
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "10px",
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
                        <ChatBubbleOutlineIcon sx={{ color: "#007AFF", fontSize: 20 }} />
                    </Box>
                    <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                        Comments
                    </Typography>
                </Stack>
                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                    <TextField
                        fullWidth
                        placeholder="Add a comment and use @Name to tag someone"
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: 36,
                                borderRadius: "8px",
                                backgroundColor: "#fff",
                                fontSize: "12px",
                                fontFamily: "Jost, sans-serif",
                                paddingRight: "36px",
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
                        }}
                    />
                    <IconButton
                        sx={{
                            marginLeft: "-40px",
                            color: "#1976d2",
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default InvoiceDetails;