import { Button, Grid } from "@mui/material";
import { useContext, useState } from "react";
import InputEmail from "../../components/generic/inputEmail";
import BoxTheme from "../../components/theme/box";
import Card from "../../components/generic/card";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignIn() {
    const { signIn } = useContext(AuthContext)
    const [email, setEmail] = useState({ error: false, value: '', errorText: 'Error' })

    const handleLogin = async (event) => {
        event.preventDefault();
        const {email: emailResponse} = await signIn(email)
        setEmail(emailResponse)
    };

    return (
        <>
            <BoxTheme sx={{ height: '100vh', display: 'flex', alignItems: 'center', width: '100vw', justifyContent: 'center', flexDirection: 'column' }}>
                <BoxTheme sx={{
                    padding: '16px',
                    minWidth: '75%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                </BoxTheme>
                <Card width={75}>
                    <BoxTheme
                        component="form"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleLogin}
                    >
                        <Grid container>
                            <Grid item xs={12}>
                                <InputEmail {...email} required onChange={({ target }) => setEmail(obj => { obj.value = target.value; obj.error = false; return { ...obj } })} />
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginTop: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                '& .MuiTextField-root': { m: 1, width: '75%' },
                            }}>
                                <Button type="submit">
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </BoxTheme>
                </Card>
            </BoxTheme>
        </>
    )
}