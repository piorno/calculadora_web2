import { Typography } from "@mui/material";

export default function ItemHeader({children, ...props}){
    return (
        <Typography sx={{ minWidth: 100 }} {...props}>
            {children}
        </Typography>
    )
}