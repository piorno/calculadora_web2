import { Box } from "@mui/material";

export default function BoxTheme({ children, ...props }) {
    return (
        <Box {...props}>{children}</Box>
    )
}