import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({type, open, message, handleClose}) {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}