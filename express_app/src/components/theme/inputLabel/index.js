import { InputLabel } from "@mui/material";

export default function InputLabelTheme({ children, ...props }) {
    return (
        <InputLabel {...props}>{children}</InputLabel>
    )
}       