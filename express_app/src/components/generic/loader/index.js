import { Backdrop, CircularProgress } from "@mui/material";

export default function Loader({...props}) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            {...props}
            // onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}