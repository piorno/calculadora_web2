import AccountCircle from "@mui/icons-material/AccountCircle"
import { FormControl, FormHelperText, InputAdornment } from "@mui/material"
import InputLabelTheme from "../../theme/inputLabel"
import InputTheme from "../../theme/input"

export default function InputEmail({errorText, ...props }) {
    return (
        <FormControl sx={{ width: '100%' }} variant="standard">
            <InputLabelTheme htmlFor="standard-adornment-email">E-mail</InputLabelTheme>
            <InputTheme id="standard-adornment-email" variant="standard" type="email" endAdornment={
                <InputAdornment position="end" sx={{ padding: '8px' }}>
                    <AccountCircle />
                </InputAdornment>
            } {...props} />
            {props.error && (
                <FormHelperText sx={{color: "red.error"}}>{errorText}</FormHelperText>
            )}
        </FormControl>
    )
}