import AccountCircle from "@mui/icons-material/AccountCircle"
import { FormControl, FormHelperText, InputAdornment } from "@mui/material"
import InputLabelTheme from "../../theme/inputLabel"
import InputTheme from "../../theme/input"

export default function InputNumber({errorText, ...props }) {
    return (
        <FormControl sx={{ width: '100%' }} variant="standard">
            <InputLabelTheme htmlFor="standard-adornment-field"></InputLabelTheme>
            <InputTheme id="standard-adornment-field" variant="standard" type="text" {...props} />
            {props.error && (
                <FormHelperText sx={{color: "red.error"}}>{errorText}</FormHelperText>
            )}
        </FormControl>
    )
}