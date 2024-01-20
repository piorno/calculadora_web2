import { useContext, useState } from "react";
import { Button, Grid } from "@mui/material";
import InputNumber from "../../components/generic/inputNumber";
import BoxTheme from "../../components/theme/box";
import Card from "../../components/generic/card";
import { CalcContext } from "../../contexts/CalcContext";


export default function Home() {
    const { calc, result } = useContext(CalcContext)
    const [field1, setField1] = useState({ error: false, value: '', errorText: 'Error' })
    const [field2, setField2] = useState({ error: false, value: '', errorText: 'Error' })
    

    return (
        <BoxTheme sx={{ height: '100vh', display: 'flex', alignItems: 'center', width: '100vw', justifyContent: 'center', flexDirection: 'column' }}>
            <BoxTheme sx={{
                padding: '16px',
                minWidth: '75%',
                display: 'flex',
                justifyContent: 'center',
            }}>
            </BoxTheme>
            <Card width={20}>
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
                // onSubmit={handleLogin}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                        <Grid item xs={4} >
                            <InputNumber {...field1} required onChange={({ target }) => setField1(obj => { obj.value = target.value.replace(/[^-0-9,\s]/g, ''); obj.error = false; return { ...obj } })} />
                        </Grid>
                        <Grid item xs={4}>
                            <InputNumber {...field2} required onChange={({ target }) => setField2(obj => { obj.value = target.value.replace(/[^-0-9,\s]/g, ''); obj.error = false; return { ...obj } })} />
                        </Grid>
                        <Grid item xs={4}>
                            <InputNumber {...result} readonly />
                        </Grid>
                        <Grid item xs={6} sx={{textAlign: "center"}}>
                            <Button type="button" onClick={() => {calc(field1, field2, '1')}} sx={{fontSize:"32px"}}>
                                +
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign: "center"}}>
                            <Button type="button" onClick={() => {calc(field1, field2, '2')}} sx={{fontSize:"32px"}}>
                                -
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign: "center"}}>
                            <Button type="button" onClick={() => {calc(field1, field2, '3')}} sx={{fontSize:"32px"}}>
                                ₓ
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign: "center"}}>
                            <Button type="button" onClick={() => {calc(field1, field2, '4')}} sx={{fontSize:"32px"}}>
                                ÷
                            </Button>
                            <Grid item xs={12} sx={{
                                marginTop: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                '& .MuiTextField-root': { m: 1, width: '75%' },
                            }}>
                            </Grid>
                            {/*  */}
                        </Grid>
                    </Grid>
                </BoxTheme>
            </Card>
        </BoxTheme>
    )
}
